import { SetupServer } from '@src/server';
import supertest from 'supertest';

import { SuperTest, Test } from 'supertest';

declare global {
    var testRequest: SuperTest<Test>;
}

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
})

