
//	Page Number Range Calculation
const getPageNumbersToShow = (currentPage, totalNumberOfPages) => {
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



export { getPageNumbersToShow };