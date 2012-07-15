
var Shred = require("shred");
var shred = new Shred();


exports.index = function(req, res){





   shred.post({
  url: "http://localhost:7474/db/data/node/1/relationships",
 
  // Shred will JSON-encode PUT/POST bodies
  content: { "to" : "http://localhost:7474/db/data/node/5", "type" : "CUKK" },
  on: {
   
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




  res.render('neo/index', {  title: 'merhaba neo '  });
  
};
