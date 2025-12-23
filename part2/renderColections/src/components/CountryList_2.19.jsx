import { useState } from "react";

import Country from "./Country";

const CountryList = ({ countries }) => {
	const [arrCountry, setArrCountry] = useState(countries);
	const message = "Too many matches, specify another filter";

	if (!arrCountry) {
		return null;
	}

	console.log("Array de paises", countries);

	const onHandleChange = (id) => {
		const itemClick = countries.filter((c) => c.cca2 === id);
		setArrCountry(itemClick);
		console.log(itemClick);
	};

	return (
		<>
			{arrCountry.length > 10 ? (
				<p>{message}</p>
			) : arrCountry.length === 1 ? (
				<Country countryData={arrCountry} />
			) : (
				arrCountry.map((country) => (
					<p key={country.cca2}>
						{country.name.official}{" "}
						<button onClick={() => onHandleChange(country.cca2)}>Show</button>
					</p>
				))
			)}
		</>
	);
};

export default CountryList;
