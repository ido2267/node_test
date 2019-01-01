// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 
var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
   if (err){
     return console.log('unable to connect to the server');
   }
   else
   {  console.log('connected successfully to the server');
    //   //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     db.collection('Todos').find({
    //       _id:new ObjectID("5c2ae65437e54a997c27e76d")
    //     }).toArray().then((docs)=>{

    //   console.log('Todos')    ;
    //   console.log( JSON.stringify(docs,undefined,2));
    //   }
    //  ).catch(err => console.log('Unable to fetch todos. error ' , err));

     db.collection('Todos').find({completed:false}).count().then((counter) => {
         console.log('Todos count ', counter);
        }
       ).catch(err => console.log('Unable to fetch todos. error ' , err));

   //db.close();
   }
});