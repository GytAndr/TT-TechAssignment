import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

export const receiptSlice = createSlice({
	name: "receipt",
	initialState: {
		receipts: [],
	},
	reducers: {
		addReceipt: (state) => {
			const newReceipt = {
				receiptId: uuid(),
				expenses: [],
			};
			state.receipts.push(newReceipt);
		},
	},
});
