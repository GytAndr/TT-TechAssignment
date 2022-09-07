import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

export const receiptSlice = createSlice({
	name: "receipt",
	initialState: {
		receipts: [],
	},
	reducers: {
		addReceipt: (state) => {
			const newReceipt = {
				receiptId: uuid(),
				expenses: [],
			};
			state.receipts.push(newReceipt);
		},
		addExpense: (state, actions) => {
			const newExpense = {
				expenseId: uuid(),
				expenseName: "test",
				expenseAmount: 10,
			};
			const matchingReceipt = state.receipts.find(
				(rec) => rec.receiptId === actions.payload
			);
			matchingReceipt.expenses.push(newExpense);
		},
		removeExpense: (state, actions) => {
			const matchingReceipt = state.receipts.find(
				(rec) => rec.receiptId === actions.payload.receiptId
			);
			const filteredExpenses = matchingReceipt.expenses.filter(
				(exp) => exp.expenseId !== actions.payload.expenseId
			);
			matchingReceipt.expenses = filteredExpenses;
		},
	},
});

export const { addReceipt, addExpense, removeExpense } = receiptSlice.actions;

export default receiptSlice.reducer;
