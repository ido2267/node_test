var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
      type:String,
      required:true,
      minlength:1,
      tim:true
    },
    completed: {
      type:Boolean,
      required:true,
      default: false
    },
    completedAt:{
      type:Number,
      default: null
    }
})

// var newTodo  = new Todo ({
//   text:"Clean toilet",
//   completed:false,
//   completedAt: 0
// });
 // newTodo.save().then((doc)=>{
//      console.log('Saved successfully',doc);
// }).catch((e)=>{
//   console.log('Unable to save that instence', e);
// });
module.exports = {Todo};
