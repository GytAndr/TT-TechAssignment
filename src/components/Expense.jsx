import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useDispatch } from "react-redux";
import {
	removeExpense,
	updateExpenseName,
	updateExpenseAmount,
} from "../store/receiptSlice";

function Expense({ expense, receiptId }) {
	const dispatch = useDispatch();
	const payload = {
		receiptId: receiptId,
		expenseId: expense.expenseId,
	};
	const onNameChange = (event) => {
		const payload = {
			receiptId: receiptId,
			expenseId: expense.expenseId,
			value: event.target.value,
		};
		dispatch(updateExpenseName(payload));
	};
	const onAmountChange = (value) => {
		const payload = {
			receiptId: receiptId,
			expenseId: expense.expenseId,
			value: value,
		};
		dispatch(updateExpenseAmount(payload));
	};
	return (
		<div>
			<input
				value={expense.expenseName}
				placeholder="Expense name"
				onChange={(event) => onNameChange(event)}
			/>
			<CurrencyInput
				placeholder="€0.00"
				prefix="€"
				value={expense.expenseAmount}
				onValueChange={(value) => onAmountChange(value)}
			/>
			<button onClick={() => dispatch(removeExpense(payload))}>
				remove expense
			</button>
		</div>
	);
}

export default Expense;
