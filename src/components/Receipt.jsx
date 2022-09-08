import React from "react";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";
import ReceiptTotal from "./ReceiptTotal";

function Receipt({ receiptId, expenses }) {
	return (
		<div className="col-sm-12 col-md-6 col-xl-4 px-md-2">
			<ExpenseForm receiptId={receiptId} />
			{expenses.map((expense) => (
				<Expense
					key={expense.expenseId}
					expense={expense}
					receiptId={receiptId}
				/>
			))}
			<ReceiptTotal expenses={expenses} />
		</div>
	);
}

export default Receipt;
