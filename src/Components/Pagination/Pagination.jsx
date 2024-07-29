import React from 'react';

const Pagination = ({ currentPage, totalNumberOfPages, handlePrevious, handleNext, getPageNumbersToShow, paginate }) => {
    return (
        <div>
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

export default Pagination;
