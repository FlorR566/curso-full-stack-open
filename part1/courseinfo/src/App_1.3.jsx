const Header = ({ course }) => {
	//console.log(course);
	return <h1>{course}</h1>;
};

const Total = ({ total }) => {
	return <p>Number of exercises {total}</p>;
};

const Part = ({ part }) => {
	//console.log(part); // vemos que parámetro se pasa
	return (
		<p>
			{part.name}: {part.exercise}
		</p>
	);
};

const Content = ({ part1, part2, part3 }) => {
	return (
		<>
			<Part part={part1} />
			<Part part={part2} />
			<Part part={part3} />
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercise: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercise: 7,
	};
	const part3 = {
		name: "State of a component",
		exercise: 14,
	};

	return (
		<>
			<Header course={course} />

			<Content part1={part1} part2={part2} part3={part3} />

			<Total total={part1.exercise + part2.exercise + part3.exercise} />
		</>
	);
};

export default App;
