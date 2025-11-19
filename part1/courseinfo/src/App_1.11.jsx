import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

const Statistics = (props) => {
	console.log(props);
	const total = props.good + props.neutral + props.bad;

	return (
		<>
			<table>
				<tbody>
					<StatisticLine text="Good:" value={props.good} />
					<StatisticLine text="Neutral:" value={props.neutral} />
					<StatisticLine text="Bad:" value={props.bad} />
					<StatisticLine text="All:" value={total} />
					<StatisticLine /*Promedio Ponderado */
						text="Average:"
						value={(
							(props.good * 1 + props.neutral * 0 + props.bad * -1) /
							total
						).toFixed(1)}
					/>
					<StatisticLine
						text="Positive:"
						value={`${((props.good * 100) / total).toFixed(1)}%`}
					/>
				</tbody>
			</table>
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
