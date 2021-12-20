import '../src/setup';
import supertest from 'supertest';
import { app, init } from '../src/app';

beforeAll(async () => {
    await init();
});

describe('GET teachers', () => {
    test('returns 200', async () => {
        const result = await supertest(app).get('/exam/teachers');

        expect(result.status).toEqual(200);
    });
});

describe('GET exams by teacherId', () => {
    test('returns 200', async () => {
        const result = await supertest(app).get('/exam/teacher/14');

        expect(result.status).toEqual(200);
    });
});
