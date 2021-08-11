const express = require('express');
var app = express();
var main = require('./ROUTES/main');
var session= require('express-session');
const port= process.env.PORT || 5000;
const MongoStore= require('connect-mongo')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://sachinsa:asdf0001@firstcluster.cumtl.mongodb.net/testdb?retryWrites=true&w=majority",
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }}),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))
app.set('views','VIEWS');
app.set('view engine',"ejs");


app.use('/', main );


app.listen(port, ()=>{console.log("server started")});


