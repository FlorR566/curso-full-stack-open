const Filter = ({ filterText, onFilterChange }) => (
	<div>
		Filter shown with:{" "}
		<input
			placeholder="add new filter..."
			value={filterText}
			onChange={onFilterChange}
		/>
	</div>
);

export default Filter;
