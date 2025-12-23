import { useState, useEffect } from "react";
import countryService from "./services/restcountries";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList_2.19";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filterText, setFilterText] = useState("");

	// Traemos los datos iniciales
	useEffect(() => {
		countryService.getAll().then((initialCountries) => {
			setCountries(initialCountries);
		});
	}, []);

	console.log("render", countries.length, "countries");

	if (!countries) {
		return null;
	}

	const countriesToShow =
		filterText === ""
			? countries
			: countries.filter((c) =>
					c.name.official.toLowerCase().startsWith(filterText.toLowerCase())
			  );

	const handleFilterShow = (event) => {
		setFilterText(event.target.value);
	};

	return (
		<>
			<Filter
				descriptionText={"Find Countries"}
				filterText={filterText}
				onFilterChange={handleFilterShow}
			/>

			{filterText === "" ? null : <CountryList countries={countriesToShow} />}
		</>
	);
};

export default App;
