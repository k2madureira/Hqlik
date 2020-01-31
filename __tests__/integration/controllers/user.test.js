const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../../src/app');

//const User = require('../../../src/app/models/User');
const factory = require('../../factories');
const trucante = require('../../util/truncate');

describe('User', () => {
  beforeEach(async () => {
    await trucante();
  });

  it('Should encrypt user password when new user created', async() => {
    const user = await factory.create('User', {
      password: '123',
    });

    const compareHash = await bcrypt.compare('123', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('Should be able to register', async() => {
    const user = await factory.attrs('User');

    const response = await request(app)
    .post('/users')
    .send(user);

    expect(response.body).toHaveProperty('id');

  });

  it('Should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');
    await request(app)
    .post('/users')
    .send(user);

    const response = await request(app)
    .post('/users')
    .send(user);

    expect(response.status).toBe(400);

  });

});