import { useState } from 'react';
import VisitedCountry from './VisitedCountry';
import HandleCountries from '../Utilities/HandleCountries';
import CountryHeader from './CountryHeader';
import getCountryData from '../Utilities/getCountryData';
import SearchCountries from '../SearchCountry/SearchCountries';
import Pagination from '../../Pagination/Pagination';
import { getPageNumbersToShow } from '../../Pagination/handlePagination';

const Countris = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 6;


    //number indexes

    const lastIndexOfCountries = currentPage * countriesPerPage;
    const firstIndexOfCountries = lastIndexOfCountries - countriesPerPage;
    const currentCountries = countries.slice(firstIndexOfCountries, lastIndexOfCountries);


    // Pagination Functions
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalNumberOfPages = Math.ceil(countries.length / countriesPerPage);

    const handleNext = () => {
        if (currentPage < totalNumberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    getPageNumbersToShow(currentPage, totalNumberOfPages);



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
            <HandleCountries currentCountries={currentCountries} countries={filteredCountries} visitedCountry={visitedCountry} setVisitedCountry={setVisitedCountry}></HandleCountries>

            <Pagination currentPage={currentPage} totalNumberOfPages={totalNumberOfPages} handlePrevious={handlePrevious} handleNext={handleNext} getPageNumbersToShow={getPageNumbersToShow} paginate={paginate}></Pagination>


        </div >
    );
}

export default Countris;
