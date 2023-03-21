import { SetupServer } from '@src/server';
import supertest from 'supertest';

import { SuperTest, Test } from 'supertest';



beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
})

