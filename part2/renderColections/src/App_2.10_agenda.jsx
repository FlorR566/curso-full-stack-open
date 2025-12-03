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
		filterText === ""
			? persons
			: persons.filter((p) =>
					p.name.toLowerCase().startsWith(filterText.toLowerCase())
			  );

	const addPerson = (event) => {
		event.preventDefault();

		const existingPerson = persons.find(
			(p) => p.name.toLowerCase() === newName.toLowerCase()
		);

		if (!existingPerson) {
			const personObject = {
				name: newName,
				phone: newPhone,
			};
			// Guardamos una nueva entrada (si no existe)
			personService.create(personObject).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setNewName("");
				setNewPhone("");
			});
		} else {
			const ok = confirm(
				`${newName} is already added to phonebook, replace the old number with a new one?`
			);

			if (!ok) return;

			personService
				.update(existingPerson.id, { ...existingPerson, phone: newPhone })
				.then((updatedPerson) => {
					setPersons(
						persons.map((p) => (p.id !== existingPerson.id ? p : updatedPerson))
					);
					setNewName("");
					setNewPhone("");
				});
		}
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

	const handleDelete = (id) => {
		const person = persons.find((p) => p.id === id);
		const ok = confirm(`Delete ${person.name}`);

		if (!ok) return;

		personService
			.remove(id)
			.then(() => {
				setPersons(persons.filter((p) => p.id !== id));
			})
			.catch(() => {
				alert("Person was already removed from server");
				setPersons(persons.filter((p) => p.id !== id));
			});
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
			<PersonList persons={personsToShow} onDelete={handleDelete} />
		</div>
	);
};

export default App;
