import React from "react";
import { useDispatch } from "react-redux";
import { addReceipt } from "../store/receiptSlice";

function Summary() {
	const dispatch = useDispatch();
	return (
		<div>
			<div>summary:</div>
			<div>TotalTotal:</div>
			<button onClick={() => dispatch(addReceipt())}>Add receipt</button>
		</div>
	);
}

export default Summary;
