import { useState, useEffect } from "react";
import countryService from "./services/restcountries";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList_2.19";
import Country from "./components/Country_2.19";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filterText, setFilterText] = useState("");
	const [selectedCountry, setSelectedCountry] = useState(null);

	// Traemos los datos iniciales
	useEffect(() => {
		countryService.getAll().then(setCountries);
	}, []);

	console.log("render", countries.length, "countries");

	const countriesToShow =
		filterText === ""
			? []
			: countries.filter((c) =>
					c.name.official.toLowerCase().startsWith(filterText.toLowerCase())
			  );

	return (
		<>
			<Filter
				descriptionText={"Find Countries"}
				filterText={filterText}
				onFilterChange={(e) => {
					setFilterText(e.target.value);
					setSelectedCountry(null);
				}}
			/>

			<CountryList
				countries={countriesToShow}
				onSelectedCountry={setSelectedCountry}
			/>

			{selectedCountry && <Country country={selectedCountry} />}
		</>
	);
};

export default App;
