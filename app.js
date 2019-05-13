var express= require("express"); 
var app = express();
/*********************************************/
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});

app.listen('3000',function(){
	console.log("here test");
})

