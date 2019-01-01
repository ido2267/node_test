// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj.getTimestamp());

 