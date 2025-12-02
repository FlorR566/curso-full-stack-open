import { useState, useEffect } from "react";
import personService from "./services/persons";
import PersonList from "./components/PersonList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [filterText, setFilterText] = useState("");

	// Traemos los datos iniciales
	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);
	console.log("render", persons.length, "persons");

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
		// Guardamos una nueva entrada
		personService.create(personObject).then((returnedNote) => {
			setPersons(persons.concat(returnedNote));
			setNewName("");
			setNewPhone("");
		});
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
