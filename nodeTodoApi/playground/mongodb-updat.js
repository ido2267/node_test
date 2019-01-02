// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 
var url = 'mongodb://localhost:27017/TodoApp';
var userUrl = 'mongodb://localhost:27017/Users';
MongoClient.connect(userUrl,(err,db)=>{
   if (err){
     return console.log('unable to connect to the server');
   }
   else
   {  console.log('connected successfully to the server');
  //   db.collection('Todos').findOneAndUpdate({ "_id" : new ObjectID("5c2bbbcf4cf3fe0d91da4a8d")},
  // {$set:{ completed:true}},   {returnOriginal:false } ).then((result)=>{
  //   console.log(result);
  // }).catch((e)=>{
  //   console.log('error: ',e);
  // });

   db.collection('Users').findOneAndUpdate({ "_id" :new  ObjectID("5c2b928fc4bd6c94a4f53c8d")},
  {$set:{ name:"Ido Sokolovsky"}, $inc:{age: 35} }, {returnOriginal:false } ).then((result)=>{
   console.log(result)}).catch((e)=>{
    console.log('error: ',e);
  });

   }
});