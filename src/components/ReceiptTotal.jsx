import React from "react";
import CurrencyInput from "react-currency-input-field";

function ReceiptTotal({ expenses, receiptId }) {
	const receiptTotal = expenses.reduce(
		(total, exp) =>
			// prettier-ignore
			parseFloat(exp.expenseAmount === "" ? 0.00 : exp.expenseAmount) + total,
		0
	);
	console.log(receiptTotal);
	return (
		<div>
			<div>Total</div>
			<CurrencyInput
				placeholder="€0.00"
				prefix="€"
				value={receiptTotal}
				disabled
			/>
		</div>
	);
}

export default ReceiptTotal;
