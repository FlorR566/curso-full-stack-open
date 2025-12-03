const PersonList = ({ persons, onDelete }) => {
	return (
		<>
			{persons.map((person) => (
				<p key={person.id}>
					{person.name}: {person.phone}
					<button onClick={() => onDelete(person.id)}>Delete</button>
				</p>
			))}
		</>
	);
};

export default PersonList;
