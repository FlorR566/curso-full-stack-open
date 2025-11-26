import { useState } from "react";

const Person = ({ persons }) =>
	persons.map((person) => (
		<li key={person.name}>
			{person.name}: {person.phone}
		</li>
	));

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "30-45-2254365" },
	]);
	const [newName, setNewName] = useState("add new name...");
	const [newPhone, setNewPhone] = useState("add new phone...");

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			phone: newPhone,
		};

		const existName = persons.some(
			(person) => person.name === personObject.name
		);

		if (existName) {
			alert(`${personObject.name} is already added to phonebook! `);
			return; // corta la ejecución de la función addPerson, evitamos que el siguiente código se ejecute
		}

		setPersons(persons.concat(personObject));
		setNewName("");
		setNewPhone("");
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

	const handlePhoneChange = (event) => {
		setNewPhone(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					phone: <input value={newPhone} onChange={handlePhoneChange} />
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
