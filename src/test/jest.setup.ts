import { setupTestDB, teardownTestDB } from './test-db-setup';
import mongoose from 'mongoose';

let mockIdCounter = 1;

beforeAll(async () => {
  await setupTestDB();
});

beforeEach(async () => {
  // Clear all collections before each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    if (collection) {
      await collection.deleteMany({});
    }
  }
});

afterAll(async () => {
  await teardownTestDB();
});

// Mock uuid to avoid ESM issues and provide unique IDs
jest.mock('uuid', () => ({
  v4: jest.fn(() => `test-uuid-${mockIdCounter++}`),
}));