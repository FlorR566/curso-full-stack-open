const Header = ({ title }) => <h2>{title}</h2>;

const Title = ({ title }) => <h1>{title}</h1>;

const Part = ({ parts }) =>
	parts.map((item) => (
		<p key={item.id}>
			{item.name}: {item.exercises}
		</p>
	));

const Total = ({ parts }) => {
	const total = parts.reduce((sum, p) => sum + p.exercises, 0);

	return (
		<p>
			<strong>Total of {total} exercises </strong>
		</p>
	);
};

const Content = ({ courses }) => (
	<div>
		{courses.map((part) => (
			<div key={part.id}>
				<Header title={part.name} />
				<Part parts={part.parts} />
				<Total parts={part.parts} />
			</div>
		))}
	</div>
);

const Course = ({ courses, title }) => {
	return (
		<div>
			<Title title={title} />
			<Content courses={courses} />
		</div>
	);
};

export default Course;
