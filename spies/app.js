var db = require('./db');

module.exports.handleSignup = (email,password)=>{
// check if email allready exists
db.saveUser({
  email,
  password
});

// save user to database 
// send a wellcome email

};