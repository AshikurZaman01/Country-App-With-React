import React from 'react';
import Country from '../Country/Country';
import handleVisitedCountry from './handleVisitedCountry';

const HandleCountries = ({ currentCountries, countries, visitedCountry, setVisitedCountry }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentCountries.map((country) => (
                    <Country key={country.cca3} country={country} handleVisitedCountry={() => handleVisitedCountry(country, visitedCountry, setVisitedCountry)} />
                ))}
            </div>
        </div>
    );
}

export default HandleCountries;
