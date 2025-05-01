const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A todo must have a title'],
      trim: true,
      maxlength: [100, 'A todo title must have less than or equal to 100 characters']
    },
    description: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    },
    dueDate: {
      type: Date,
      required: [true, 'A todo must have a due date']
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Todo must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Index for searching by title
todoSchema.index({ title: 'text' });

// Index for querying by user and status
todoSchema.index({ user: 1, status: 1 });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;