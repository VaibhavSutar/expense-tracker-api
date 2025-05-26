import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './database.js'; // Adjust the path as necessary
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from "./routes/transactionsRoute.js"
import jb from "./config/cron.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

if(process.env.NODE_ENV === "production"){
    jb.start(); // Start the cron job
}
app.use(rateLimiter);
app.use(express.json()); // Middleware to parse JSON bodies


app.get("/api/health",(req,res)=>
{
    res.status(200).json({status:"ok"});
})
app.use('/api/transactions', transactionsRoute);


initDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});