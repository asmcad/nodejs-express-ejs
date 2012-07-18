

var http = require('http');
//var util = require('util');

exports.index = function(req, res){



  //res.render('neo/index', {  title: 'this is ne index page '  });
  
  
  
		var options = {
		  host: 'http://localhost:7474',
		  path: '/db/data/node/3'
		};

	

		http.get("http://localhost:7474/db/data/node/3", function(res) {
		  console.log("Got response: " + res.statusCode);
		   console.log('HEADERS: ' + JSON.stringify(res.headers));
		   
		    var data = '';
		   
		   res.on("data", function(chunk) 
		   {
			console.log("BODY: " + chunk);
			 data += chunk;
		   });
		  
		   res.on('end',function(){
				var obj = JSON.parse(data);
				//console.log(util.inspect(obj));
				console.log( obj.self);
		   });
		   
		   
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
		
		
	
  
  
  res.end();
 
  
};


exports.create_user_get_exp = function(req, res){

  res.render('neo/create_user_view', {  result: ''  });

};




exports.create_user_post_exp = function(req, res){

	if(req.body.username == "" || req.body.password == "" )
	{
	  res.render('neo/create_user_view', {  result: 'please fill the form completely'  });
	}
	else
	{
		console.log(req.body.username);
		console.log(req.body.password);
		res.end("hey "+req.body.username + "!");
	}
	

};





		


