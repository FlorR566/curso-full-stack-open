const Filter = ({ descriptionText, filterText, onFilterChange }) => (
	<div>
		{descriptionText}{" "}
		<input
			placeholder="add new filter..."
			value={filterText}
			onChange={onFilterChange}
		/>
	</div>
);

export default Filter;
