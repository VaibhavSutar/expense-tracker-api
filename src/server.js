import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './database.js'; // Adjust the path as necessary
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from "./routes/transactionsRoute.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(rateLimiter);
app.use(express.json()); // Middleware to parse JSON bodies



app.use('/api/transactions', transactionsRoute);


initDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});