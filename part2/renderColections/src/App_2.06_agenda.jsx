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

		const existName = persons.some(
			(person) => person.name === personObject.name
		);

		if (existName) {
			console.log("Erroooooooor");
			return; // corta la ejecución de la función addPerson, evitamos que el siguiente código se ejecute
		}

		setPersons(persons.concat(personObject));
		setNewName("");
	};

	const handleNameChange = (event) => {
		//console.log(event.target.value);
		const value = event.target.value;
		setNewName(value);

		// const isDuplicate = persons.some((person) => person.name === value);

		// if (isDuplicate) {
		// 	console.log("Error: el nombre ya existe");
		// }
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
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
