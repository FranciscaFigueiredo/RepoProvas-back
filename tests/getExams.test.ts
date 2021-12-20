import '../src/setup';
import supertest from 'supertest';
import { app } from '../src/app';

describe('GET exams', () => {
    test('returns 201', async () => {
        const result = await supertest(app).get('/exams');

        expect(result.status).toEqual(201);
    });
});
