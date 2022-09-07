import { configureStore } from "@reduxjs/toolkit";
import receiptSlice from "./receiptSlice";

export default configureStore({
	reducer: {
		receipt: receiptSlice,
	},
});
