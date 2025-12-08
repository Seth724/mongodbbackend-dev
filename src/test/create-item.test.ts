import request from 'supertest';
import app from './test-app'; // Import the test Express app

describe('POST /add-item', () => {
  it('should create a new item', async () => {
    const response = await request(app)
      .post('/api/v1/items/add-item')
      .send({ name: 'Test Item' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Item added successfully');
    expect(response.body.result.name).toBe('Test Item');
  });

  it('should return 400 if name is missing', async () => {
    const response = await request(app).post('/api/v1/items/add-item').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Name is required');
  });
});