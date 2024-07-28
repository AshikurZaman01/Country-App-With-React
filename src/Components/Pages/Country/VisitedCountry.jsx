
const VisitedCountry = ({ visitedCountry }) => {
    return (
        <div>
            <div>
                <div>
                    {
                        visitedCountry && visitedCountry.length > 0 ?
                            <h1 className='text-center mb-4 text-green-600 font-extrabold'>Visited Countries</h1>
                            : <h1 className='text-center mb-4 text-red-600 font-extrabold'>No Visited Countries</h1>
                    }
                </div>

                <div className='grid grid-cols-6 gap-5 items-center pb-10'>
                    {
                        visitedCountry && visitedCountry.map((country, indx) => {
                            return (
                                <div key={indx} className='text-center'>
                                    <h3 className='text-xl font-bold'>{country.name.common}</h3>
                                    <div className='flex items-center justify-center p-4 bg-gray-100'>
                                        <img src={country.flags.svg} alt={`${country.name.common} flag`} className='w-14 h-10' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default VisitedCountry;
