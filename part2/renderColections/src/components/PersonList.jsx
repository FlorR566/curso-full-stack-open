const PersonList = ({ persons }) =>
	persons.map((person) => (
		<p key={person.name}>
			{person.name}: {person.phone}
		</p>
	));

export default PersonList;
