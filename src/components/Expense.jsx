import React from "react";
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
			<input
				type="text"
				value={expense.expenseName}
				placeholder="Expense name"
			/>
			<input
				type="text"
				value={`€${expense.expenseAmount}`}
				placeholder="€0.00"
			/>
			<p>eur:{expense.expenseAmount}</p>
			<button onClick={() => dispatch(removeExpense(payload))}>
				remove expense
			</button>
		</div>
	);
}

export default Expense;
