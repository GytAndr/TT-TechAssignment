import React from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateReceiptCategory } from "../store/receiptSlice";
import Categories from "./Categories";
function ExpenseForm({ receiptId }) {
	const dispatch = useDispatch();
	const onReceiptCategoryChange = (value) => {
		const payload = {
			receiptId: receiptId,
			value: value,
		};
		dispatch(updateReceiptCategory(payload));
	};
	const countryList = [
		{ id: 1, name: "Food" },
		{ id: 2, name: "Houseware" },
		{ id: 3, name: "Entertainment" },
	];
	const defaultSelectText = "Select:";
	return (
		<div className="d-flex justify-content-between expense-form">
			<Categories
				defaultText={defaultSelectText}
				optionsList={countryList}
				onReceiptCategoryChange={onReceiptCategoryChange}
			/>
			<button
				onClick={() => dispatch(addExpense(receiptId))}
				className="btn-add-expense"
			>
				Add expense
			</button>
		</div>
	);
}

export default ExpenseForm;
// {			<select
// 	onChange={(event) => onReceiptCategoryChange(event)}
// 	className="receipt-categories"
// >
// 	<option hidden value="">
// 		Select:
// 	</option>
// 	<option value="Food">Food</option>
// 	<option value="Houseware">Houseware</option>
// 	<option value="Entertainment">Entertainment</option>
// </select>}
