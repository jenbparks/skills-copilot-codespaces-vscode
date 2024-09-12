// Create web server
// Use Express.js to handle web server
var express = require('express');
var app = express();

// Use body-parser to parse JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use CORS to allow cross-origin requests
var cors = require('cors');
app.use(cors());

// Use MongoDB to create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');

// Create schema for comments
var Comment = mongoose.model('Comment', {
  text: String
});

// Create