const utils = require('./utils');
const expect = require('expect');

// describe groups the tests in categories
describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
      //  if (res != 44){
      //   throw new Error(`Value should be 44 but got ${res} `);

      //  }

    });
    // async add 


    it('should add two numbers with a delay', (done) => {
      utils.asyncAdd(1, 2, (sum) => {
        expect(sum).toBe(3).toBeA('number');
        // tell mocha to wait for the async process
        done();
      })
    });


  })

  describe('#square', () => {
    it('should give the square of a number', () => {
      var res = utils.square(2);

      expect(res).toBe(4).toBeA('number');
      // if (res != 4){
      //  throw new Error(`Value should be 4 but got ${res} `);

      // }

    });
    // async square 

    it('should give the square of a number with a delay', (done) => {
      utils.asyncSquare(2, (y) => {
        expect(y).toBe(4).toBeA('number');
        done();
      })
    });
  });
});
  // verify first and last names are set
  // assert it include first and last names with proper values

// it('A bogous test',()=>{
//      //expect(12).toNotBe(11); // will work 
//     // expect({name:"Ido"}).toBe({name:"Ido"});  - not going to work
//     expect({name:"Ido"}).toEqual({name:"Ido"});  
//     expect({name:"ido"}).toNotEqual({name:"Ido"}); 
//     expect ([2,3,4]).toInclude(2);
//     expect ([2,3,4]).toExclude(5);
//     expect({name:"Ido",
//     age:52,
//     location:'Shilat'}).toInclude({ age:52});  
//     expect({name:"Ido",
//     age:52,
//     location:'Shilat'}).toExclude({ age:25});  
// })


  it('should verify the object has proper first and last name', () => {
    var userObject = {
      location: "Shilat",
      age: 52
    }

    userObject = utils.setname(userObject, "Ido Sokolovsky");
    expect(userObject).toBeA('object');
    expect(userObject).toInclude({ firstName: "Ido", lastName: "Sokolovsky" });

  })
