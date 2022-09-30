const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(request, response){
response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request , response){

var num1 = Number (request.body.num1);
var num2 = Number (request.body.num2);

result = num1 + num2;

  response.send("The result of the calulation is: " + result);
})

app.get("/bmicalculator", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(request, response){

var Weight = Number (request.body.Weight);
var Height = Number (request.body.Height);

bmiValue = Math.floor(Weight / Height);


 //var bmiCalculator = bmiCalculator (65, 2);
 //console.log (bmiCalculator)
 response.send("The BMI Calculation value is : " + bmiValue);
});

app.listen (3000, function(){
  console.log("Server started in port 3000");
});
