// require('dotenv').config();
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import methodOverride from 'method-override';

// import model
import User from './models/user';

// import routes
import indexRouter from './routes/index';
import postsRouter from './routes/posts';
import reviewsRouter from './routes/reviews';

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
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// express-session setup
app.use(session({
  secret: 'the chief',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// passport setup
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mount routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

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
app.set('port', process.env.PORT || 3000);

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