var express = require('express')
  , http = require('http')
  , ejs = require('ejs')
  , site = require('./code/site')
  , post = require('./code/post')
  , user = require('./code/user')
  , neo = require('./code/neo');

  

  
  
  
  
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/**
 * Module dependencies.
 */
 
 

// General

app.get('/', site.index);

// User

app.all('/users', user.list);
app.all('/user/:id/:op?', user.load);
app.get('/user/:id', user.view);
app.get('/user/:id/view', user.view);
app.get('/user/:id/edit', user.edit);
app.put('/user/:id/edit', user.update);

// Posts

app.get('/posts', post.list);



// neo

app.get('/neo', neo.index);



app.get('/db', function(req, res) 
{
  

   shred.post({
  url: "http://localhost:7474/db/data/node/6/relationships",
 
  // Shred will JSON-encode PUT/POST bodies
  content: { "to" : "http://localhost:7474/db/data/node/7", "type" : "OFFF" },
  on: {
    // you can use response codes as events
    201: function(response) {
      console.log("User Created");
    },
    409: function (response) {
      console.log("User with that name already exists.");
    },
    response: function(response) {
      // We got a 40X that is not a 409, or a 50X
      console.log("Oh no, something went wrong!");
    }
  }
});
  
  

  
 res.end("ohooo");
	
});







app.listen(3000);
console.log('Express app started on port 3000');










