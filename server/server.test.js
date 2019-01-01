const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Server', () => {

  describe('#root', () => {
    it('Should return 404', (done) => {
      request(app)
        .get('/')
        .expect(200)
        // .expect({
        //   error:"page not found" })
        .expect((res) => {
          expect(res.body).toInclude({
            title:"Home page"   
          });
        })

        .end(done);
    });
  });
  describe('#users', () => {
    // new test :
    // assert 200
    // Assert that you exist in user array 


    it('Should return Ofir age 17', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({ name: "Ofir", age: 17 });
        })

        .end(done);
    });
  });
})