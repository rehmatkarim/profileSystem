const express = require('express');

const app = express();
var bodyparser = require('body-parser');

app.use(express.static('/home/rehmatkarim/profileSystem/profileSystem'))

app.get('/', function(req, res) {
  console.log('hello');
  res.send("Hello World");
})


// ADDING ROUTE FOR API INTERFACE
app.get('/api/validateUser', function(req, res){
  console.log("A request is made to server");
  console.log(req.body);
  return 'Sucess';

})


app.get("/home", function(req, res) {
  res.send("You are at home");
})

app.listen(8000, () => {
    console.log('Server started!')
  })