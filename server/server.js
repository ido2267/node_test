const express = require('express');
var app = express();

 app.get('/', (req,res )=>{
   res.status(200).send({
     title:"Home page"   ,
      name:"Todo app v1.0"

   });
 });

// GET /users
// give users a name property and an age property 
app.get('/users', (req,res )=>{
  var users = [
    {name:"Ido",  age:52 },
    {name:"Ofir",  age:17 },
    {name:"Shaked",  age:13 },
    {name:"Shugi",  age:7 }]
  res.status(200).send(users);
})

 module.exports.app = app;
 app.listen(3000);
