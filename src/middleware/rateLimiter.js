import e from "express";
import ratelimit from "../upstash.js"; // Adjust the path as necessary

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit");
        if(!success) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error in rate limiter:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default rateLimiter;