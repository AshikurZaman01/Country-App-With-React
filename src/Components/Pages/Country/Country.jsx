import React, { useState } from 'react';

const Country = ({ country }) => {

    const { name, flags, population, region, maps, openStreetMaps, capital, area, borders } = country || {};
    const [visited, setVisited] = useState(false);

    const handleVisted = () => {
        setVisited(!visited);
    }

    return (
        <div className='max-w-sm mx-auto text-center bg-white shadow-lg rounded-lg overflow-hidden'>

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
                <div className='mt-4'>
                    <div>
                        {maps && <a href={maps.googleMaps} target="_blank" rel='noopner noreferrer' className='text-blue-500 hover:underline'>View on Google Maps</a>}
                    </div>
                </div>

                <div>
                    <button onClick={handleVisted} className={`btn ${visited ? "btn-primary" : "btn-outline-primary"} btn-sm w-full my-3 text-black capitalize`}>{visited ? "Visited" : "Not Visited"}</button>
                </div>

            </div>

        </div>
    );
}

export default Country;
