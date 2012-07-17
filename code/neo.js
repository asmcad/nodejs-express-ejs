
var Shred = require("shred");
var shred = new Shred();


exports.index = function(req, res){



  res.render('neo/index', {  title: 'this is ne index page '  });
  
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



// shred.post({
  // url: "http://localhost:7474/db/data/node/1/relationships",
 
  
  // content: { "to" : "http://localhost:7474/db/data/node/5", "type" : "CUKK" },
  // on: {
   
    // 201: function(response) {
      // console.log("User Created");
    // },
    // 409: function (response) {
      // console.log("User with that name already exists.");
    // },
    // response: function(response) {
   
      // console.log("Oh no, something went wrong!");
    // }
  // }
// }); 