//
//
// import express from 'express';
// import type { Request, Response, NextFunction } from 'express';
// //import { db, initializeDb } from './configs/db.js';
// import mongoose from 'mongoose';
// import itemRoutes from './routes/item-routes.js';
//
//
// const PORT = 9000;
// const app = express();
// const MONGO_URI = 'mongodb://localhost:27017/metaroon';
// // JSON middleware
// app.use(express.json());
//
// //serve static files from the public directyory
// app.use(express.static('public'));
//
// // app.use((req, res, next: NextFunction) => {
// //     console.log('Middleware executed');
// //     next();
// // });
// app.get('/', (req, res) => {
//     res.sendFile('src/public/index.html', { root: '.' });
// });
//
// //hello metaroon
// // MongoDB connection
// mongoose
//     .connect(MONGO_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((error) => console.error('Failed to connect to MongoDB:', error));
//
// //versioning
// app.use('/api/v1/items',itemRoutes)
//
// // Initialize the database
//
// // initializeDb().then(() => {
// //     console.log('Database initialized');
// // });
//
// // Check the server running
// app.get('/', (req, res) => {
//     const numberOne = 1;
//     const numberTwo = 2;
//     const sum = numberOne + numberTwo;
//     console.log(`The sum of ${numberOne} and ${numberTwo} is ${sum}`);
//
//     res.json({ message: `The sum of ${numberOne} and ${numberTwo} is ${sum}` });
// });
//
// // CRUD operations
//
// // Create
// // app.post('/add-item', async (req: Request, res: Response) => {
// //     const { name } = req.body;
// //     if (!name) {
// //         return res.status(400).json({ error: 'Name is required' });
// //     }
// //     try {
// //         db.data.items.push({ id: db.data.items.length + 1, name });
// //         await db.write();
// //         res.status(201).json({ message: 'Item added successfully', item: { id: db.data.items.length, name } });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Failed to add item' });
// //     }
// // });
//
// //read
// // app.get('/get-items',async(req:Request,res:Response)=>{
// //     try{
// //         await db.read();
// //         res.status(200).json({items:db.data.items});
// //     }catch(error){
// //         res.status(500).json({error:'Failed to retrieve items'});
// //     }
// // });
//
// //update
// // app.put('/update-item/:id', async (req: Request, res: Response) => {
// //     const idParam = req.params.id;
// //     if (!idParam) {
// //         return res.status(400).json({ error: 'Id is required' });
// //     }
// //
// //     const id = parseInt(idParam);
// //     const { name } = req.body;
// //
// //     if (!name) {
// //         return res.status(400).json({ error: 'Name is required' });
// //     }
// //
// //     try {
// //         const item = db.data.items.find(item => item.id === id);
// //         if (!item) {
// //             return res.status(404).json({ error: 'Item not found' });
// //         }
// //         item.name = name;
// //         await db.write();
// //         res.status(200).json({ message: 'Item updated successfully', item });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Failed to update item' });
// //     }
// // });
//
// //delete
// // app.delete('/delete-item/:id', async (req: Request, res: Response) => {
// //     const idParam = req.params.id;
// //     if (!idParam) {
// //         return res.status(400).json({ error: 'Id is required' });
// //     }
// //
// //     const id = parseInt(idParam);
// //
// //     try {
// //         const itemIndex = db.data.items.findIndex(item => item.id === id);
// //         if (itemIndex === -1) {
// //             return res.status(404).json({ error: 'Item not found' });
// //         }
// //         db.data.items.splice(itemIndex, 1);
// //         await db.write();
// //         res.status(200).json({ message: 'Item deleted successfully' });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Failed to delete item' });
// //     }
// // });
//
//
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemRoutes from './routes/item-routes.js';
// Load environment variables
dotenv.config();
const PORT = 9000;
const app = express();
const MONGO_URI = process.env.MONGO_URI;
// JSON middleware
app.use(express.json());
// Serve static files from the public directory
app.use(express.static('public'));
// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile('src/public/index.html', { root: '.' });
});
// MongoDB connection
mongoose
    .connect(MONGO_URI || '')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));
// Versioning
app.use('/api/v1/items', itemRoutes);
// Check the server running
app.get('/', (req, res) => {
    const numberOne = 1;
    const numberTwo = 2;
    const sum = numberOne + numberTwo;
    console.log(`The sum of ${numberOne} and ${numberTwo} is ${sum}`);
    res.json({ message: `The sum of ${numberOne} and ${numberTwo} is ${sum}` });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
//# sourceMappingURL=server.js.map