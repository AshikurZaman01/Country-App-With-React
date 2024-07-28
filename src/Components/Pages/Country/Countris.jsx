import { useEffect, useState } from 'react';
import Country from './Country';
import handleVisitedCountry from '../Utilities/handleVisitedCountry';
import VisitedCountry from './VisitedCountry';
import HandleCountries from '../Utilities/HandleCountries';
import CountryHeader from './CountryHeader';

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

            <CountryHeader countries={countries}></CountryHeader>



            <VisitedCountry visitedCountry={visitedCountry}></VisitedCountry>

            <HandleCountries countries={countries} visitedCountry={visitedCountry} setVisitedCountry={setVisitedCountry}></HandleCountries>

        </div>
    );
}

export default Countris;
