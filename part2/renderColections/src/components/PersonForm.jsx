const PersonForm = ({ onSubmit, name, onNameChange, phone, onPhoneChange }) => (
	<form onSubmit={onSubmit}>
		<div>
			name:{" "}
			<input
				placeholder="add new name..."
				value={name}
				onChange={onNameChange}
			/>
		</div>
		<div>
			phone:{" "}
			<input
				placeholder="add new phone..."
				value={phone}
				onChange={onPhoneChange}
			/>
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
);

export default PersonForm;
