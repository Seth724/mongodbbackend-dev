import request from 'supertest';
import app from './test-app';

describe('GET /get-items', () => {
  it('should retrieve all items', async () => {
    const response = await request(app).get('/api/v1/items/get-items');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.items)).toBe(true);
  });
});