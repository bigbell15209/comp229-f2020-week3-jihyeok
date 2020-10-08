//After turning index.js, It would be running all the codes

//It show where documents, path and location of files and call those.
// 'node_module' is third party package to download and call something such as bootstrap, jquery and express

// in 'public', You can download resources here such as images, style sheet and js file(In this case, it plays a role as IIFE -- Immediately Invoked Function Expression)



//install 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

let app = express();



// view engine setup
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));



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
  res.render('error', { title : 'Error' });
});

module.exports = app;
