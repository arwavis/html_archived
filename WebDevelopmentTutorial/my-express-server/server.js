

const express = require("express");
const app = express();

app.get("/", function(request, response){
response.send("<h1> Hello, World </h1>");
});

app.get("/contact", function(request, response){
  response.send("Contact me at : arwa@gmail.com");
});

app.get("/about", function(request,response){
  response.send("I am learning Web Development");

});

app.get("/hobbie", function(request,response){
  response.send("I love to play basket ball and write code ");

});

app.get("/play", function(request,response){
  response.send("I love to play carom ");

});

app.listen (3000, function(){
  console.log("Server started in port 3000");
});
