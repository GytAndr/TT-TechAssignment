import React from "react";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";
import ReceiptTotal from "./ReceiptTotal";

function Receipt({ receiptId, expenses }) {
	return (
		<div>
			<ExpenseForm receiptId={receiptId} />
			{expenses.map((expense) => (
				<Expense
					key={expense.expenseId}
					expense={expense}
					receiptId={receiptId}
				/>
			))}
			<ReceiptTotal expenses={expenses} receiptId={receiptId} />
		</div>
	);
}

export default Receipt;
