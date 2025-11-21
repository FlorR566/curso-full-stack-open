import Note from "./components/Note";

const App = ({ notes }) => {
	// {notes} viene desde main.jsx ahí se colocó el listado al principio, con el resto de ejercicios cambió de lugar
	return (
		<div>
			<h1>Notes</h1>
			<ul>
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
				{/* <li>{notes[0].content}</li>
				<li>{notes[1].content}</li>
				<li>{notes[2].content}</li> */}
			</ul>
		</div>
	);
};

export default App;
