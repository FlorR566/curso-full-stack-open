import { useState } from "react";
import PersonList from "./components/PersonList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-123456", id: 1 },
		{ name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", phone: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [filterText, setFilterText] = useState("");

	const personsToShow =
		filterText == ""
			? persons
			: persons.filter((p) =>
					p.name.toLowerCase().startsWith(filterText.toLowerCase())
			  );

	const addPerson = (event) => {
		event.preventDefault();

		const personObject = {
			name: newName,
			phone: newPhone,
			id: crypto.randomUUID(),
		};

		const existName = persons.some(
			(person) => person.name === personObject.name
		);

		if (existName) {
			alert(`${personObject.name} is already added to phonebook! `);
			return;
		}

		const updated = persons.concat(personObject);
		setPersons(updated);
		setNewName("");
		setNewPhone("");
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setNewPhone(event.target.value);
	};

	const handleFilterShow = (event) => {
		setFilterText(event.target.value);
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter filterText={filterText} onFilterChange={handleFilterShow} />
			<h3>Add a new</h3>
			<PersonForm
				onSubmit={addPerson}
				name={newName}
				onNameChange={handleNameChange}
				phone={newPhone}
				onPhoneChange={handlePhoneChange}
			/>
			<h3>Numbers</h3>
			<PersonList persons={personsToShow} />
		</div>
	);
};

export default App;
