import express from "express";
import fetchuser from '../middleware/fetchuser.js';
const router = express.Router();

import { addExpense, getExpense, deleteExpense } from '../controllers/expense.js';
import { addIncome, getIncomes, deleteIncome } from '../controllers/income.js';

router.post('/add-income', fetchuser, addIncome);
router.get('/get-incomes', fetchuser, getIncomes);
router.delete('/delete-income/:id', fetchuser, deleteIncome);
router.post('/add-expense', fetchuser, addExpense);
router.get('/get-expenses', fetchuser, getExpense);
router.delete('/delete-expense/:id', fetchuser, deleteExpense);

export default router;