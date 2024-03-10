import {useState, useEffect} from 'react'
import Table from '../../components/UI/Table'
import TablePagination from '../../components/UI/TablePagination'
import useTablePagination from '../../hooks/useTablePagination'
import styles from '../../components/UI/Table.module.css'

const List = ({dtList}) => {
    const [dtReact, setDtReact] = useState(dtList)

    const {dataList,
            currentPage,
            indexOfLastItem,
            itemsPerPage,
            handlePrevious,
            handleNext,
            currentItems
    } = useTablePagination(dtReact)

    return (<>
        {currentItems.map((data) => (
            <div className={styles.tr}> 
                <div className={styles.td}>{data.fecha}</div>
                <div className={styles.td}>{data.numDesem}</div>
                <div className={styles.td}>
                    {data.tipDocu==1 ? 'Cédula':''}
                </div>
                <div className={styles.td}>{data.numDocu}</div>
                <div className={styles.td}> $ {data.monto.toLocaleString()}</div>
            </div>
        ))}
        <TablePagination
            currentItemsCount = {dtList.length}
            itemsPerPage = {itemsPerPage}
            indexOfLastItem = {indexOfLastItem}
            handlePrevious = {handlePrevious}
            handleNext = {handleNext}
            currentPage = {currentPage}
        />
    </>);
}
const headTable = ["Hora y fecha","Numero de desembolso","Tipo de documento","Documento","Monsto"]; 
export default Table(List,headTable);