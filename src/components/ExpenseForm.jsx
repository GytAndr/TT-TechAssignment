import React from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/receiptSlice";

function ExpenseForm({ receiptId }) {
	const dispatch = useDispatch();
	return (
		<div>
			ExpenseForm
			<button onClick={() => dispatch(addExpense(receiptId))}>
				Add expense
			</button>
		</div>
	);
}

export default ExpenseForm;
