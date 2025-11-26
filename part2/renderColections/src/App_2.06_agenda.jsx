import { useState } from "react";

const Person = ({ persons }) =>
	persons.map((person) => <li key={person.name}>{person.name}</li>);

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("add new name...");

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
		};

		setPersons(persons.concat(personObject));
		setNewName(" ");
	};

	const handleAddName = (event) => {
		//console.log(event.target.value);
		setNewName(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleAddName} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				<Person persons={persons} />
			</ul>
		</div>
	);
};

export default App;
