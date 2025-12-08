import request from 'supertest';
import app from './test-app';

describe('PUT /update-item/:id', () => {
  it('should update an item', async () => {
    const newItem = await request(app)
      .post('/api/v1/items/add-item')
      .send({ name: 'Item to Update' });

    const id = newItem.body.result._id;

    const response = await request(app)
      .put(`/api/v1/items/update-item/${id}`)
      .send({ name: 'Updated Item' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Item updated successfully');
    expect(response.body.updatedItem.name).toBe('Updated Item');
  });
});

describe('DELETE /delete-item/:id', () => {
  it('should delete an item', async () => {
    const newItem = await request(app)
      .post('/api/v1/items/add-item')
      .send({ name: 'Item to Delete' });
    
    const id = newItem.body.result._id;

    const response = await request(app).delete(`/api/v1/items/delete-item/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Item deleted successfully');
  });
});