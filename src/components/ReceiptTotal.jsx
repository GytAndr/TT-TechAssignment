import React from "react";
import CurrencyInput from "react-currency-input-field";

function ReceiptTotal({ expenses }) {
	const receiptTotal = expenses.reduce(
		(total, exp) =>
			// prettier-ignore
			parseFloat(exp.expenseAmount == "" ? 0.00 : exp.expenseAmount) + total,
		0
	);
	return (
		<div className="expence-total d-flex justify-content-between">
			<span>Total</span>
			<CurrencyInput
				placeholder="€0.00"
				prefix="€"
				value={receiptTotal.toFixed(2)}
				disabled
				className="total-receipt"
			/>
		</div>
	);
}

export default ReceiptTotal;
