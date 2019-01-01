const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App',()=>{
   var db = {
     saveUser: expect.createSpy()
   };
 
   app.__set__('db',db);

  it('should call the spy correctly',()=>{
      var spy = expect.createSpy();
      spy("Ido",52);
      expect(spy).toHaveBeenCalledWith("Ido", 52);
  } );

  it ('Should call saveUser with user object',()=>{
    var email = "andrew@gmail.com";
    var password ="123abc";

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});