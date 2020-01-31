const request = require('supertest');
const app = require('../../../src/app');

describe('Set', () => {
  it('Should be able to register Set Analisys', async () =>{
    const response = await request(app)
    .post('/set')
    .send({
      name:"Time function",
      functionality: "time view",
      code:"${<>}"
    });

    expect(response.body).toHaveProperty('set._id');
  });

 
});