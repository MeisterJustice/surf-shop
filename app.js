import express from 'express';
import { createServer } from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
const server = createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Set port
app.set('port', process.env.PORT || 5000);

// Use mongoose promise library
mongoose.Promise = require('bluebird');

// Connecting to mongodb
async function init() {
  try {
    const isConnected = await mongoose.connect(
      'mongodb://localhost:27017/surf_shop',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    if (isConnected) {
      // Listening to server
      await server.listen(app.get('port'), () =>
        console.log(`Server running on port ${app.get('port')}...`)
      );
      console.log(`Connecting to mongodb.`);
    }
  } catch (error) {
    throw error.message;
  }
}

init();