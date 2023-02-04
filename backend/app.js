
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose=require('mongoose')
var cors=require('cors')


var app = express();

// app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/harbinger')

var userRouter = require('./routes/users');

app.use('/', userRouter);


app.listen(4000,()=>console.log("server started at port 4000"))

module.exports = app;
