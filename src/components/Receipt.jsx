import React from "react";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";
import ReceiptTotal from "./ReceiptTotal";

function Receipt({ id, expenses }) {
	return (
		<div>
			<ExpenseForm receiptId={id} />
			{expenses.map((expense) => (
				<Expense key={expense.expenseId} expense={expense} receiptId={id} />
			))}
			<ReceiptTotal />
		</div>
	);
}

export default Receipt;
