const Header = ({ course }) => {
	//console.log(course);
	return <h1>{course}</h1>;
};

const Part = ({ part }) => {
	//console.log("-->", part);
	return (
		<p>
			{part.name}: {part.exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	const part = parts.map(function (part) {
		return (
			<li key={part.id}>
				<Part part={part} />
			</li>
		);
	});

	return part;
};

const Total = ({ parts }) => {
	const totalExercises = parts.reduce(function (sum, p) {
		// console.log("Sumatoria:", sum);
		// console.log("valor a sumar:", p.exercises);
		return sum + p.exercises;
	}, 0);

	return (
		<p>
			<strong>Number of exercises: {totalExercises} </strong>
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default Course;
