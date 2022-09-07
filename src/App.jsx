import { useSelector } from "react-redux";
import Receipt from "./components/Receipt";
import Summary from "./components/Summary";

function App() {
	const receipts = useSelector((state) => state.receipt.receipts);
	console.log(receipts); //TO DO Remove
	return (
		<div className="App">
			{receipts.map((receipt) => (
				<Receipt
					key={receipt.receiptId}
					id={receipt.receiptId}
					expenses={receipt.expenses}
				/>
			))}
			<Summary />
		</div>
	);
}

export default App;
