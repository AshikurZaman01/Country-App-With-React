import { useEffect, useState } from 'react';
import Country from './Country';
import handleVisitedCountry from '../Utilities/handleVisitedCountry';
import VisitedCountry from './VisitedCountry';
import HandleCountries from '../Utilities/HandleCountries';

const Countris = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

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

            <VisitedCountry visitedCountry={visitedCountry}></VisitedCountry>

            <HandleCountries countries={countries} visitedCountry={visitedCountry} setVisitedCountry={setVisitedCountry}></HandleCountries>

        </div>
    );
}

export default Countris;
