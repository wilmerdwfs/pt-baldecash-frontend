import {useState,useEffect} from 'react'

const useTablePagination = (dtReact) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataList, setDataList] = useState(dtReact);
    const itemsPerPage = 6; 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dtReact.slice(indexOfFirstItem, indexOfLastItem);

    const  handlePrevious = (value) => {
        setCurrentPage(value)
    }

    const  handleNext = (value) => {    
        setCurrentPage(value)
    }

    return {dataList,currentItems,currentPage,indexOfLastItem,itemsPerPage,handlePrevious,handleNext}

}

export default useTablePagination;