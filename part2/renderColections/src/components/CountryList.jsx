import Country from "./Country";

const CountryList = ({ countries }) => {
	const message = "Too many matches, specify another filter";

	return (
		<>
			{countries.length > 10 ? (
				<p>{message}</p>
			) : countries.length > 1 ? (
				countries.map((country) => (
					<p key={country.cca2}>{country.name.official}</p>
				))
			) : (
				<Country countryData={countries} />
			)}
		</>
	);
};

export default CountryList;
