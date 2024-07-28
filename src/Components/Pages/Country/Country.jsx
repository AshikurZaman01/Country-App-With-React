import React from 'react';

const Country = ({ country }) => {

    const { name, flags, population, region, maps, openStreetMaps, capital, area, borders } = country || {};

    console.log(country);

    return (
        <div>
            <div>
                <img src={flags.svg} alt="" />
            </div>
        </div>
    );
}

export default Country;
