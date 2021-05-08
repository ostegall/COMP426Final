var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var db = require('./db')
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var testBackEndRouter = require("./routes/test-back-end");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use("/test-back-end", testBackEndRouter);
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next(createError(404));
  next();
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = app;
