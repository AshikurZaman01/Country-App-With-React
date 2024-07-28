import { useEffect } from "react"

const getCountryData = (setCountries) => {
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    }, [setCountries])
}

export default getCountryData;