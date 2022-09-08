import React from "react";
import CurrencyInput from "react-currency-input-field";
import { useDispatch, useSelector } from "react-redux";
import { addReceipt } from "../store/receiptSlice";

function Summary() {
	const receipts = useSelector((state) => state.receipt.receipts);
	const dispatch = useDispatch();
	const totalAllReceipts = receipts.reduce((allTotal, rec) => {
		const expensesSum = rec.expenses.reduce(
			(total, exp) =>
				// prettier-ignore
				parseFloat(exp.expenseAmount === "" ? 0.00 : exp.expenseAmount) + total,
			0
		);
		return allTotal + expensesSum;
	}, 0);
	return (
		<div>
			<div>
				<div>Total</div>
				<CurrencyInput
					placeholder="€0.00"
					prefix="€"
					value={totalAllReceipts}
					disabled
					className="text"
				/>
			</div>
			<button
				onClick={() => dispatch(addReceipt())}
				className="btn-add-receipt"
			>
				Add receipt
			</button>
		</div>
	);
}

export default Summary;
