// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 
var url = 'mongodb://localhost:27017/Users';
MongoClient.connect(url,(err,db)=>{
   if (err){
     return console.log('unable to connect to the server');
   }
   else
   {  console.log('connected successfully to the server');
      //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
        db.collection('Users').find({name:"Ido Sokolovsky"}).toArray().then((docs)=>{

      console.log('Todos')    ;
      console.log( JSON.stringify(docs,undefined,2));
      }
     ).catch(err => console.log('Unable to fetch todos. error ' , err));

      

   //db.close();
   }
});