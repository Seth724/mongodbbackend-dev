import express from 'express';
import itemRoutes from '../routes/item-routes.js';

const app = express();

// JSON middleware
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile('src/public/index.html', { root: '.' });
});

// Versioning
app.use('/api/v1/items', itemRoutes);

// Check the server running
app.get('/health', (req, res) => {
    const numberOne = 1;
    const numberTwo = 2;
    const sum = numberOne + numberTwo;
    console.log(`The sum of ${numberOne} and ${numberTwo} is ${sum}`);

    res.json({ message: `The sum of ${numberOne} and ${numberTwo} is ${sum}` });
});

export default app;