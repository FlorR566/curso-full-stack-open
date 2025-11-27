import { useState } from "react";

const PersonList = ({ persons }) =>
	persons.map((person) => (
		<p key={person.name}>
			{person.name}: {person.phone}
		</p>
	));

const Filter = ({ showName, handleFilterShow }) => (
	<div>
		Filter shown with:{" "}
		<input
			placeholder="add new filter..."
			value={showName}
			onChange={handleFilterShow}
		/>
	</div>
);

const PersonForm = ({
	addPerson,
	newName,
	handleNameChange,
	newPhone,
	handlePhoneChange,
}) => (
	<form onSubmit={addPerson}>
		<div>
			name:{" "}
			<input
				placeholder="add new name..."
				value={newName}
				onChange={handleNameChange}
			/>
		</div>
		<div>
			phone:{" "}
			<input
				placeholder="add new phone..."
				value={newPhone}
				onChange={handlePhoneChange}
			/>
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
);

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-123456", id: 1 },
		{ name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", phone: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [showName, setShowName] = useState("");

	const personsToShow =
		showName == ""
			? persons
			: persons.filter((p) =>
					p.name.toLowerCase().startsWith(showName.toLowerCase())
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
		setShowName(event.target.value);
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter showName={showName} handleFilterShow={handleFilterShow} />
			<h3>Add a new</h3>
			<PersonForm
				addPerson={addPerson}
				newName={newName}
				handleNameChange={handleNameChange}
				newPhone={newPhone}
				handlePhoneChange={handlePhoneChange}
			/>
			<h3>Numbers</h3>
			<PersonList persons={personsToShow} />
		</div>
	);
};

export default App;
