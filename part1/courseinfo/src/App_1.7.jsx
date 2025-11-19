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
			<div>All: {good + neutral + bad}</div>
			<div>Average:{(good + neutral + bad) / 3} </div>
			<div>Positive: {(good * 100) / (good + neutral + bad)} %</div>
		</div>
	);
};

export default App;
