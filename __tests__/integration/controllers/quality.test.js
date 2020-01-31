const request = require('supertest');
const app = require('../../../src/app');

describe('Quality', () => {
  it('Should be able to return Data Quality to Qlik', async () =>{
    const response = await request(app)
    .post('/quality')
    .send({
      table:"fato faturamento",
      temp: 0,
      columns:"CODMOVIMENTO,CODPEDIDOWEB,TIPOMOVIMENTO,CODMOVIMENTO,",
      activityFrom:"Extração",
      activityStore:"HQ",
      from:"lib://DataSource",
      store:"lib://DataSource"
    });

    expect(response.body).toHaveProperty('countColumns');
  });
});