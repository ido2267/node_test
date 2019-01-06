const MongoClient = require('mongodb').MongoClient;


var url = 'mongodb://localhost:27017/Users';
MongoClient.connect(url,(err,client)=>{
   if (err){
     return console.log('unable to connect to the server');
   }
   else
   {  console.log('connected successfully to the server');
   const db = client.db('Users');

        // db.collection('Todos').insertOne({
        //       text:"Testing the new database",
        //       completed:false   
        // },(err,result)=>{
        //   if (err){
        //     return console.log('unable to connect to ionsert todo',err);
        //      }
        //   else
        //   {console.log(JSON.stringify(result.ops,undefined,2)); }
 
          db.collection('Users').insertOne({
              name:"Ofir Sokolovsky",
              age:17,
              location:"Shilat"}
              ,(err,result)=>{
          if (err){
            return console.log('unable to connect to ionsert todo',err);
             }
          else
          {
            //console.log(JSON.stringify(result.ops,undefined,2))
           console.log(result.ops[0]._id.getTimestamp());
            ; }
         
   });
   client.close();
   }
});