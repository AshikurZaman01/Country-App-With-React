const handleVisitedCountry = (country, visitedCountry, setVisitedCountry) => {

    const isVisited = visitedCountry.some(c => c.name.common === country.name.common)

    if (isVisited) {
        setVisitedCountry(visitedCountry.filter(c => c.name.common !== country.name.common))
    } else {
        const { name, flags } = country || {};
        const newCountry = { name, flags }

        setVisitedCountry([...visitedCountry, newCountry])
    }

}

export default handleVisitedCountry; 