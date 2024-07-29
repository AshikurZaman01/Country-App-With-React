import { useState } from 'react';
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


    //	Page Number Range Calculation
    const getPageNumbersToShow = () => {
        const totalNumbers = 5;
        const half = Math.floor(totalNumbers / 2);
        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalNumberOfPages, currentPage + half);

        if (currentPage <= half) {
            end = Math.min(totalNumbers, totalNumberOfPages);
        }
        if (currentPage + half >= totalNumberOfPages) {
            start = Math.max(totalNumberOfPages - totalNumbers + 1, 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };



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

            <div className="mt-4">
                <nav className="flex justify-center">
                    <ul className="flex flex-wrap justify-center space-x-2">
                        <li>
                            <button
                                onClick={handlePrevious}
                                className={`px-3 py-2 border bg-white text-gray-700 border-gray-300 hover:bg-blue-100 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                        </li>
                        {getPageNumbersToShow().map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => paginate(number)}
                                    className={`px-3 py-2 border ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} border-gray-300 hover:bg-blue-100`}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={handleNext}
                                className={`px-3 py-2 border bg-white text-gray-700 border-gray-300 hover:bg-blue-100 ${currentPage === totalNumberOfPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={currentPage === totalNumberOfPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default Countris;
