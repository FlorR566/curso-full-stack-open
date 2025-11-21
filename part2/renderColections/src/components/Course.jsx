const Header = ({ course }) => {
	//console.log(course);
	return <h1>{course}</h1>;
};

const Part = ({ part }) => {
	//console.log("-->", part);
	return (
		<p>
			{part.name}: {part.exercise}
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

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			{/*<Total parts={course.parts} />*/}
		</div>
	);
};

export default Course;

// _____________ Próximo ejercicio: _____________
// const Total = ({ parts }) => {
// 	//console.log(parts);
// 	return (
// 		<p>
// 			Number of exercises{" "}
// 			{parts[0].exercise + parts[1].exercise + parts[2].exercise}
// 		</p>
// 	);
// };
