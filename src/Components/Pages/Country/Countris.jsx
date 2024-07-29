import { useState } from 'react';
import Country from './Country';
import handleVisitedCountry from '../Utilities/handleVisitedCountry';
import VisitedCountry from './VisitedCountry';
import HandleCountries from '../Utilities/HandleCountries';
import CountryHeader from './CountryHeader';
import getCountryData from '../Utilities/getCountryData';
import SearchCountries from '../SearchCountry/SearchCountries';

const Countris = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const countryPerPage = 8;

    //number indexes
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);




    getCountryData(setCountries);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        setCurrentPage(1);
    }
    const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));


    return (
        <div className="container mx-auto p-4">

            <CountryHeader countries={countries}></CountryHeader>

            <SearchCountries handleSearch={handleSearch} searchValue={searchValue}></SearchCountries>

            <VisitedCountry visitedCountry={visitedCountry}></VisitedCountry>
            <HandleCountries countries={filteredCountries} visitedCountry={visitedCountry} setVisitedCountry={setVisitedCountry}></HandleCountries>



        </div>
    );
}

export default Countris;
