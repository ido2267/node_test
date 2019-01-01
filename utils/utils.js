

module.exports.add = (a,b)=>{
    return a +b ;
};

module.exports.asyncAdd = (a,b, callback) =>{
    setTimeout(()=>{
        callback( a+b) ;
    }, 1000);
}


module.exports.square = (x)=>{
    return x*x ;
};
//


module.exports.asyncSquare = (x, callback) =>{
    setTimeout(()=>{
        callback( x*x) ;
    }, 1000);
}
//
module.exports.setname = (userObject,fullName)  =>{
var names = fullName.split(' '); // we assume there is only first and last name 
userObject.firstName = names[0];
userObject.lastName = names[1];
return userObject;
};