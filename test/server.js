const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();
chai.use(chaiHttp);

describe("Get user info", () => {
  it("Should return my name and email", (done) => {
    chai
      .request(server)
      .get("/user-info")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.name.should.equal("test");
        res.body.email.should.equal("test@gmail.com");
        done();
      });
  });
});

// Write more tests here

server.close();
