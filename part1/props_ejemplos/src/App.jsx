const Hello = (props) => {
	console.log(props);
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old.
			</p>
		</div>
	);
};

const App = () => {
	const name = "Peter";
	const age = 10;

	return (
		<>
			<h1>Greetings</h1>
			<Hello name="Florencia" age={26 + 10} />
			<Hello name={name} age={age} />
		</>
	);
};

export default App;

// ejemplo copado:
// const App = () => {
// 	const now = new Date();
// 	const a = 10;
// 	const b = 20;
// 	console.log(now, a + b);

// 	return (
// 		<div>
// 			<p>Hello world, it is {now.toString()}</p>
// 			<p>
// 				{a} plus {b} is {a + b}
// 			</p>
// 		</div>
// 	);
// };
