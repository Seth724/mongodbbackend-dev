# Backend Learn

This is a backend project built with TypeScript, Node.js, Express.js, and MongoDB. It demonstrates basic CRUD operations using MongoDB as the database, with Mongoose as the ODM (Object Data Modeling) library.

## Features

- **Create**: Add new items to the database.
- **Read**: Retrieve all items from the database.
- **Update**: Update existing items in the database.
- **Delete**: Remove items from the database.
- **Versioning**: API versioning implemented with `/api/v1`.

## Prerequisites

- **Node.js** (v16 or higher)
- **Yarn** (or npm)
- **TypeScript** (installed globally or locally in the project)
- **MongoDB** (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend-learn
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3.Set up MongoDB:  
Ensure MongoDB is running locally or provide a connection URI for a cloud instance.
Update the MongoDB connection string in src/server.ts or src/configs/mongodb.ts.

## Scripts

**Start the development server:**  
```bash
yarn dev
```
This runs the TypeScript compiler in watch mode and starts the server with nodemon.

**Build the project:**  
```bash
tsc
```

**Run the server:**  
```bash
node ./out/server.js
```

## API Endpoints

### Base URL
```
http://localhost:9000/api/v1/items
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/add-item` | Add a new item |
| GET | `/get-items` | Retrieve all items |
| PUT | `/update-item/:id` | Update an item by ID |
| DELETE | `/delete-item/:id` | Delete an item by ID |

### Example Request

**Add Item**

```http
POST /api/v1/items/add-item
Content-Type: application/json

{
  "name": "Banana"
}
```

**Response:**
```json
{
  "message": "Item added successfully",
  "result": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "id": "uuid-generated-id",
    "name": "Banana",
    "__v": 0
  }
}
```

## Project Structure

```
backend-learn/
├── src/
│   ├── configs/
│   │   └── mongodb.ts       # MongoDB connection configuration
│   ├── controllers/
│   │   └── item-controller.ts # CRUD logic
│   ├── models/
│   │   └── item-model.ts    # Mongoose schema and model
│   ├── routes/
│   │   └── item-routes.ts   # API routes
│   └── server.ts            # Main server file
├── out/                     # Compiled JavaScript files
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB ODM for Node.js
- **uuid**: Generate unique IDs
- **nodemon**: Development server that restarts on file changes
- **TypeScript**: Type-safe JavaScript

### Dev Dependencies

- **@types/express**: Type definitions for Express
- **@types/node**: Type definitions for Node.js


## 📜 Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reloading |
| `yarn run watch-ts` | Watch TypeScript files and compile on changes |
| `yarn run watch-server` | Watch compiled files and restart server |

### Development Workflow

The `dev` script runs two processes concurrently:
1. **TypeScript Watcher**: Compiles `.ts` files to `out/` directory
2. **Nodemon**: Watches compiled files and restarts server on changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔮 Future Enhancements

- [ ] Add input validation middleware
- [ ] Implement authentication and authorization
- [ ] Add unit and integration tests
- [ ] API documentation with Swagger
- [ ] Logging implementation
- [ ] Environment configuration
- [ ] Docker containerization
- [ ] Rate limiting and security middleware

---
