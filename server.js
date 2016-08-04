var request = require('request'); 
var cheerio = require('cheerio'); 
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var databaseUrl = "news";
var collections = ["news"];

request("http://www.http://todayinawesome.com/", function (error, response, html) {
  
  var $ = cheerio.load(html);
  var db = mongojs(databaseUrl, collections);

  var result = [ ]


  console.log(result);
});


db.on('error', function(err) {
  console.log('Database Error:', err);
});

app.get('/', function(req, res) {
  res.send("News");
});


app.get('/all', function(req, res) {
  
  db.news.find({}, function(err, found) {
    
    if (err) {
      console.log(err);
    } 
    
    else {
      res.json(found);
    }
  });
});


app.get('/name', function(req, res) {
  
  db.news.find().sort({name:1}, function(err, found) {
   
    if (err) {
      console.log(err);
    } 
   
    else {
      res.json(found);
    }
  });
});




app.listen(3000, function() {
  console.log('App running on port 3000!');
});
