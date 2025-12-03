import personService from "../services/persons";

const PersonList = ({ persons, updateList }) =>
	persons.map((person) => {
		const handleDelete = (id, name, phone) => {
			confirm(`Delete ${name} ${phone}`)
				? personService.remove(id).then((itemRemoved) => {
						updateList();
						console.log("Eliminado --->", itemRemoved);
				  })
				: "";
		};

		return (
			<p key={person.id}>
				{person.name}: {person.phone}
				<button
					onClick={() => handleDelete(person.id, person.name, person.phone)}
				>
					Delete
				</button>
			</p>
		);
	});

export default PersonList;
