import React from 'react';

const CountryHeader = ({ countries }) => {
    return (
        <div>
            <div className='text-center mb-4'>
                <h3 className='text-3xl font-bold pb-3'>Countries</h3>
                <h4 className='tex2xl font-bold'>Total Countries : {countries.length}</h4>
            </div>
        </div>
    );
}

export default CountryHeader;
