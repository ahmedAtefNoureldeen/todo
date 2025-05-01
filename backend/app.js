const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');


const app = express();

const corsOptions = {
    origin:  'http://localhost:5173', // Allow only requests from this origin
    credentials: true,
  };

app.use(cors(corsOptions));


app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());


app.use('/api/v1/users', userRouter);
app.use('/api/v1/todos', todoRouter);


app.use(globalErrorHandler);

module.exports = app;
