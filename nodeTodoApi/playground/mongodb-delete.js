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
     // delete many
  //  db.collection('Todos').deleteMany({text:"Eat lunch"}).then((res)=>{
  //    console.log(res);
  // });
  // delete one 
    //  db.collection('Todos').deleteOne({ text: "Eat lunch" }).then((res) => {
    //    console.log(res);
    //  });
  // find one and delete 
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //    console.log(res);
    //  });
   //db.close();
// chalange 
     db.collection('Users').findOneAndDelete({ "_id" : new ObjectID("5c2ae8ac0f6ed59af88adeda"), }).then((res) => {
            console.log(res);
          });
     db.collection('Users').deleteMany({name:"Ido Sokolovsky"}).then((res) => {
         console.log(res);
        });     

   }
});