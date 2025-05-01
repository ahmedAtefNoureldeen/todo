const Todo = require('../models/todoModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllTodos = catchAsync(async (req, res, next) => {
  // Build query
  const queryObj = { user: req.user.id };
  
  // Filter by status if provided
  if (req.query.status && ['pending', 'completed'].includes(req.query.status)) {
    queryObj.status = req.query.status;
  }

  // Search by title if provided
  if (req.query.search) {
    queryObj.$text = { $search: req.query.search };
  }

  const todos = await Todo.find(queryObj).sort('-createdAt');

  // Send response
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos
    }
  });
});

exports.getTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!todo) {
    return next(new AppError('No todo found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo
    }
  });
});

exports.createTodo = catchAsync(async (req, res, next) => {
  // Add user to request body
  req.body.user = req.user.id;

  const newTodo = await Todo.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      todo: newTodo
    }
  });
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!todo) {
    return next(new AppError('No todo found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo
    }
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  if (!todo) {
    return next(new AppError('No todo found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.updateTodoStatus = catchAsync(async (req, res, next) => {
  if (!req.body.status || !['pending', 'completed'].includes(req.body.status)) {
    return next(new AppError('Please provide a valid status (pending or completed)', 400));
  }

  const todo = await Todo.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id
    },
    { status: req.body.status },
    {
      new: true,
      runValidators: true
    }
  );

  if (!todo) {
    return next(new AppError('No todo found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo
    }
  });
});