
export const CitiesFilter = ( countries ) => {
    const citiesAndCounty = countries.flatMap((country) =>
        country.cities.map((city) => `${city}, ${country.country}`)
    );
    return citiesAndCounty;
};
