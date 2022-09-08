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
		if (value) {
			const payload = {
				receiptId: receiptId,
				expenseId: expense.expenseId,
				value: value,
			};
			dispatch(updateExpenseAmount(payload));
		} else {
			const payload = {
				receiptId: receiptId,
				expenseId: expense.expenseId,
				value: 0,
			};
			dispatch(updateExpenseAmount(payload));
		}
	};
	return (
		<div className="expence-single gap-3">
			<input
				value={expense.expenseName}
				placeholder="Expense name"
				onChange={(event) => onNameChange(event)}
				className="expense-input-name"
			/>
			<CurrencyInput
				placeholder="€0.00"
				prefix="€"
				value={expense.expenseAmount}
				defaultValue={0}
				onValueChange={(value) => onAmountChange(value)}
				className="expense-input-amount"
			/>
		</div>
	);
	//added button to remove expense, but since there is no such button in design it was removed}
	{
		/* <button onClick={() => dispatch(removeExpense(payload))}>
		remove expense
	</button> */
	}
}

export default Expense;
