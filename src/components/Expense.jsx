import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/receiptSlice";

function Expense({ expense, receiptId }) {
	const dispatch = useDispatch();
	const payload = {
		receiptId: receiptId,
		expenseId: expense.expenseId,
	};
	return (
		<div>
			<input value={expense.expenseName} placeholder="Expense name" />
			<CurrencyInput placeholder="€0.00" prefix="€" />
			{/* <CurrencyInput placeholder="€0.00" value={expense.expenseAmount} /> */}
			<button onClick={() => dispatch(removeExpense(payload))}>
				remove expense
			</button>
		</div>
	);
}

export default Expense;
