import request from 'supertest';
import {App} from '../../../src/app';

let app: App;

beforeAll(done => {
  app = new App();
  app.start();
  done();
})

afterAll(done => {
  app.stop();
  done();
})

describe('Status endpoint', () => {
  it('ping', async () => {
    const httpServer = app.httpServer;
    const res = await request(httpServer)
      .get('/ping');
    expect(res.statusCode).toEqual(200);
  })
})
