import React from "react";
import Expense from "./Expense";

function Receipt({ id, expenses }) {
	return (
		<div>
			<div>Receipt {id}</div>
			{expenses.map((expense) => (
				<Expense />
			))}
		</div>
	);
}

export default Receipt;
