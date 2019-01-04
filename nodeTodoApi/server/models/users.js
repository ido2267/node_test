var mongoose = require('mongoose');

var Users= mongoose.model('Users', {
  email: {
    type: String,  // type of variable
    required: true,   // is it mandatory (validator)
    minlength: 2,   //minimum length (validator)
    trim: true       // take off trailing spaces
  }

});

 module.exports = { Users };


//var userUrl = 'mongodb://localhost:27017/Users';

//mongoose.connect(userUrl);


// var newUser = new User({
//   email: 'Ido2267@gmail.com' 
// });
// newUser.save().then((doc) => {
//  console.log('Saved successfully', doc);
// }).catch((e) => {
//  console.log('Unable to save that instence', e);
// });