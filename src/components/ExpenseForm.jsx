import React from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateReceiptCategory } from "../store/receiptSlice";

function ExpenseForm({ receiptId }) {
	const dispatch = useDispatch();
	const onReceiptCategoryChange = (event) => {
		const payload = {
			receiptId: receiptId,
			value: event.target.value,
		};
		dispatch(updateReceiptCategory(payload));
	};
	return (
		<div>
			ExpenseForm
			<select onChange={(event) => onReceiptCategoryChange(event)}>
				<option hidden value="">
					Select:
				</option>
				<option value="Food">Food</option>
				<option value="Houseware">Houseware</option>
				<option value="Entertainment">Entertainment</option>
			</select>
			<button onClick={() => dispatch(addExpense(receiptId))}>
				Add expense
			</button>
		</div>
	);
}

export default ExpenseForm;
