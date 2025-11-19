import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const initialVotes = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(initialVotes);

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const handleAnecdote = () => {
		setSelected(randomNumberInRange(0, 7));
	};

	const handleVotes = () => {
		console.log("Array Actual:", votes);
		console.log("Posición actual:", selected);

		const arrCopy = { ...votes }; // copia objeto
		arrCopy[selected] += 1; // suma 1 voto a la posición actual (actualiza)
		setVotes(arrCopy); // guarda el voto

		console.log("Array Actualizado:", arrCopy);
	};

	return (
		<div>
			<div>{anecdotes[selected]}</div>
			<div>
				<br /> {/* <-- salto de línea */}
				Has {votes[selected]}
				{votes[selected] <= 1 ? " vote" : " votes"}
			</div>
			<Button onClick={handleVotes} text="Vote" />
			<Button onClick={handleAnecdote} text="Next Anecdote" />
		</div>
	);
};

export default App;
