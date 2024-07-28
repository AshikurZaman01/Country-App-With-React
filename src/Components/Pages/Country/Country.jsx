import React from 'react';

const Country = ({ country }) => {

    const { name, flags, population, region, maps, openStreetMaps, capital, area, borders } = country || {};

    console.log(borders);

    return (
        <div className=''>
            <div className='flex items-center justify-center p-4 bg-gray-100'>
                <img src={flags.svg} alt={`${name.common} flag`} className='w-32 h-16' />
            </div>

            <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{name.common}</h2>
                <p className='text-gray-700'><strong>Capital : {capital?.[0]}</strong></p>
                <p className='text-gray-700'><strong>Population : {population.toLocaleString()}</strong></p>
                <p className='text-gray-700'><strong>Region : {region}</strong></p>
                <p className='text-gray-700'><strong>Area : {area.toLocaleString()} km²</strong></p>
                {
                    borders && borders ? <p className='text-gray-700'><strong>Borders : {borders.join(', ')} </strong></p> : <p><strong>Border : N/A</strong></p>
                }
            </div>

        </div>
    );
}

export default Country;
