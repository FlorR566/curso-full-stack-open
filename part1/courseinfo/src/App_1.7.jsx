import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
	const feedback = "Give Feedback";
	const statistics = "Statistics";

	// guarda los clics de cada botón en su propio estado
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGood = () => setGood(good + 1);
	const increaseNeutral = () => setNeutral(neutral + 1);
	const increaseBad = () => setBad(bad + 1);

	const total = good + neutral + bad;
	const average = (good * 1 + neutral * 0 + bad * -1) / total;
	const positive = (good * 100) / total;

	return (
		<div>
			<Header title={feedback} />
			<Button onClick={increaseGood} text="Good" />
			<Button onClick={increaseNeutral} text="Neutral" />
			<Button onClick={increaseBad} text="Bad" />
			<Header title={statistics} />
			<div>Good: {good}</div>
			<div>Neutral: {neutral}</div>
			<div>Bad: {bad}</div>
			<div>All: {total}</div>
			<div>
				{/*Promedio Ponderado */}Average: {total <= 0 ? "0" : average}
			</div>
			<div>Positive: {total <= 0 ? "0" : positive} %</div>
		</div>
	);
};

export default App;
