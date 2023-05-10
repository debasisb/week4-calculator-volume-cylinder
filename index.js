const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/VolCalc", function(req, res){
  res.sendFile(__dirname + "/VolCalculator.html");
});

// invoked on the submit button
app.post("/VolCalc", function(req, res){

//converts the string input to a float number
  var radius = parseInt(req.body.radius);
  var volume = parseInt(req.body.volume);

// does the computation of the input variables, as numbers
  var volume = (1/3) * Math.PI * Math.pow(radius,2) * volume;

//display the result in 2 decimal places
res.send("The volume is " + volume.toFixed(2));

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
