import { useState, useMemo } from "react"

interface UsePaginationReturn<T> {
    pageData: T[];
    currentPage: number;
    maxPages: number;
    goToNextPage: () => void;
    goToPrevPage: () => void;
    jumpToPage: (page: number) => void;
}

const usePagination = <T,>(
    data: T[],
    itemsPerPage: number
): UsePaginationReturn<T> => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const maxPages = Math.ceil(data.length / itemsPerPage);

    const pageData = useMemo<T[]>(()=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }, [currentPage, data, itemsPerPage]);

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, maxPages));
    }

    const goToPrevPage = () => {
        setCurrentPage(prev => Math.min(prev - 1, maxPages));
    }

    const jumpToPage = (page: number) => {
        const pageNumber = Math.max(1, Math.min(page, maxPages));
        setCurrentPage(pageNumber);
    }

    return {
        pageData,
        currentPage,
        maxPages,
        goToNextPage,
        goToPrevPage,
        jumpToPage
    }
}

export default usePagination;