import supertest from 'supertest';
import faker from 'faker';
import { app } from '../src/app';

describe('POST exam', () => {
    test('returns 201', async () => {
        const body = {
            name: faker.datatype.string(),
            link: faker.internet.url(),
            category: 'P3',
            teacher: 'Maximiano Ornelas Medeiros',
            subject: 'Sociologia',
        };

        const result = await supertest(app).post('/exam')
            .send(body);

        expect(result.status).toEqual(201);
    });
});
