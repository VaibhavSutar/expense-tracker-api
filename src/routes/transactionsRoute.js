import express from 'express';
import { createtransactions, deletetransactions, getSummaryById, getTransactionsByUserId } from '../controllers/transactionsController.js';
const router = express.Router();



router.post('/',createtransactions);
router.get('/:userId', getTransactionsByUserId);
router.delete('/:id', deletetransactions);
router.get('/summary/:userId',getSummaryById);

export default router;