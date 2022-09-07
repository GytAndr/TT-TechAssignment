import React from "react";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";

function Receipt({ id, expenses }) {
	return (
		<div>
			<ExpenseForm receiptId={id} />
			<div>Receipt {id}</div>
			{expenses.map((expense) => (
				<Expense key={expense.expenseId} expense={expense} receiptId={id} />
			))}
		</div>
	);
}

export default Receipt;
