import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = (props) => {
	console.log(props);
	const total = props.good + props.neutral + props.bad;
	const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / total;
	const positive = (props.good * 100) / total;

	return (
		<>
			<div>Good: {props.good}</div>
			<div>Neutral: {props.neutral}</div>
			<div>Bad: {props.bad}</div>
			<div>All: {total}</div>
			<div>Average: {total <= 0 ? "0" : average}</div>
			<div>Positive: {total <= 0 ? "0" : positive} %</div>
		</>
	);
};

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

	const isFeedback = good + neutral + bad > 0 ? true : false;

	return (
		<div>
			<Header title={feedback} />
			<Button onClick={increaseGood} text="Good" />
			<Button onClick={increaseNeutral} text="Neutral" />
			<Button onClick={increaseBad} text="Bad" />
			<Header title={statistics} />
			<div>
				{isFeedback ? (
					<Statistics good={good} neutral={neutral} bad={bad} />
				) : (
					"No feedback given"
				)}
			</div>
		</div>
	);
};

export default App;
