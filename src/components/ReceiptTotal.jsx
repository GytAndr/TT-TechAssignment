import React from "react";
import { useSelector } from "react-redux";

function ReceiptTotal({ expenses, receiptId }) {
	const receiptTotal = expenses.reduce(
		(total, exp) =>
			parseInt(exp.expenseAmount === "" ? 0 : exp.expenseAmount) + total,
		0
	);
	console.log(receiptTotal);
	return (
		<div>
			<div>Total</div>
			<div>eur:{receiptTotal}</div>
		</div>
	);
}

export default ReceiptTotal;
