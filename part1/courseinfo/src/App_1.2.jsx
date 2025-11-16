const Header = (props) => {
	// console.log(props);
	return (
		<>
			<h1>{props.course}</h1>
		</>
	);
};

const Total = (props) => {
	return (
		<>
			<p>
				Number of exercises{" "}
				{props.parts[0].exercise +
					props.parts[1].exercise +
					props.parts[2].exercise}
			</p>
		</>
	);
};

const Part = (props) => {
	// console.log(`Name: ** ${props.name} and Exercise: ** ${props.exercise}`);
	return (
		<>
			<p>
				{props.part.name}: {props.part.exercise}
			</p>
		</>
	);
};

const Content = (props) => {
	// console.log(`content name --> ${props.parts[0]}`);

	return (
		<>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
		</>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React", exercise: 10 },
			{ name: "Using props to pass data", exercise: 7 },
			{ name: "State of a component", exercise: 14 },
		],
	};

	return (
		<>
			<Header course={course.name} />

			<Content parts={course.parts} />

			<Total parts={course.parts} />
		</>
	);
};

export default App;
