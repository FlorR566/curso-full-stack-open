const Header = ({ course }) => {
	//console.log(course);
	return <h1>{course}</h1>;
};

const Total = ({ parts }) => {
	//console.log(parts);
	return (
		<p>
			Number of exercises{" "}
			{parts[0].exercise + parts[1].exercise + parts[2].exercise}
		</p>
	);
};

const Part = ({ part }) => {
	//console.log("-->", part); // vemos que parámetro se pasa
	return (
		<p>
			{part.name}: {part.exercise}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
		</>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercise: 10,
			},
			{
				name: "Using props to pass data",
				exercise: 7,
			},
			{
				name: "State of a component",
				exercise: 14,
			},
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
