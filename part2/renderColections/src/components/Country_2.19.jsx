const Country = ({ country }) => {
	console.log(country);

	return (
		<div>
			<h2>{country.name.official}</h2>
			<p>Capital: {country.capital}</p>
			<p>Area: {country.area}</p>

			<h3>Languages</h3>
			<ul>
				{Object.values(country.languages).map((lan) => (
					<li key={lan}>{lan}</li>
				))}
			</ul>

			<img
				className="flag"
				src={country.flags.svg}
				alt={`Flag of ${country.name.official}`}
			></img>
		</div>
	);
};

export default Country;
