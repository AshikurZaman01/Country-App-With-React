
const SearchCountries = ({ searchValue, handleSearch }) => {
    return (
        <div>
            <div className="max-w-md mx-auto my-4">
                <input
                    onChange={handleSearch}
                    value={searchValue}
                    type="text"
                    name="country"
                    id="country-search"
                    placeholder="Search Country"
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ease-in-out"
                />
            </div>
        </div>
    );
}

export default SearchCountries;
