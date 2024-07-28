import React from 'react';

const Country = ({ country }) => {

    const { name, flags, population, region, maps, openStreetMaps, capital, area, borders } = country || {};

    console.log(country);

    return (
        <div>
            <div className='flex items-center justify-center p-4 bg-gray-100'>
                <img src={flags.svg} alt={`${name.common} flag`} className='w-32 h-16' />
            </div>
        </div>
    );
}

export default Country;
