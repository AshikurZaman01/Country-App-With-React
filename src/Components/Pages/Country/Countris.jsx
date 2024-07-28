import { useEffect, useState } from 'react';
import Country from './Country';

const Countris = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mx-auto p-4">

            <div className='text-center mb-4'>
                <h3 className='text-3xl font-bold pb-3'>Countries</h3>
                <h4 className='tex2xl font-bold'>Total Countries : {countries.length}</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.map((country) => (
                    <Country key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
}

export default Countris;
