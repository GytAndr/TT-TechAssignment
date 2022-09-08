import { useSelector } from "react-redux";
import Receipt from "./components/Receipt";
import Summary from "./components/Summary";

function App() {
	const receipts = useSelector((state) => state.receipt.receipts);
	return (
		<div className="container">
			{receipts.map((receipt) => (
				<Receipt
					key={receipt.receiptId}
					receiptId={receipt.receiptId}
					expenses={receipt.expenses}
				/>
			))}
			<Summary />
		</div>
	);
}

export default App;
