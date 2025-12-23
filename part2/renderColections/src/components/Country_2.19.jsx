const Country = ({ countryData }) => {
	return (
		<>
			{countryData.map((country) => (
				<>
					<div key={country.cca2}>
						<h2>{country.name.official}</h2>
						<p>Capital: {country.capital}</p>
						<p>Area: {country.area}</p>
						<h3>Languages</h3>

						{Object.values(country.languages).map((lan) => (
							<ul>
								<li>{lan}</li>
							</ul>
						))}

						<img className="flag" src={country.flags.svg}></img>
					</div>
				</>
			))}
		</>
	);
};

export default Country;
