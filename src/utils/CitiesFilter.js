import React from 'react';

export const CitiesFilter = ( countries ) => {
    const citiesAndCounty = countries.data.flatMap((country) =>
        country.cities.map((city) => `${city}, ${country.country}`)
    );
    return citiesAndCounty;
};
