import Country from "./Country";

const CountryList = ({ countries, onSelectedCountry }) => {
	if (countries.length > 10) {
		return <p> Too many matches, specify another filter </p>;
	}

	if (countries.length === 1) {
		onSelectedCountry(countries[0]);
		return null;
	}

	return (
		<>
			{countries.map((country) => (
				<p key={country.cca2}>
					{country.name.official}
					<button onClick={() => onSelectedCountry(country)}>Show</button>
				</p>
			))}
		</>
	);
};

export default CountryList;
