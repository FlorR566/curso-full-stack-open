import { useState } from "react";

const App = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState([]);
	const [total, setTotal] = useState(0);

	const handleLeftClick = () => {
		setAll(allClicks.concat("L"));
		const updatedLeft = left + 1;
		console.log("left before", left);
		setLeft(updatedLeft);
		console.log("left after", left);
		setTotal(updatedLeft + right);
	};

	const handleRightClick = () => {
		setAll(allClicks.concat("R"));
		const updatedRight = right + 1;
		setRight(updatedRight);
		setTotal(updatedRight + left);
	};

	return (
		<div>
			{left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
			{right}
			<p>{allClicks.join(" ")}</p>
			<p>Total: {total}</p>
		</div>
	);
};

export default App;
