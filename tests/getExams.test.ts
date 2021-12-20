import '../src/setup';
import supertest from 'supertest';
import { app, init } from '../src/app';

beforeAll(async () => {
    await init();
});

describe('GET exams', () => {
    test('returns 200', async () => {
        const result = await supertest(app).get('/exam');

        expect(result.status).toEqual(200);
    });
});
