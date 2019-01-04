var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require ('./models/todo');
var {Users} = require ('./models/users');
 

var app = express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
     var todo = new Todo({
      text:req.body.text
    })
    todo.save().then((doc)=>{res.send(doc);}, (e) =>{
      e.status(400).send(e)
    });
     
});

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
});
