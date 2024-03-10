import styles from './TablePagination.module.css'
import {useState} from 'react'
import useTablePagination from '../../hooks/useTablePagination';
import { AiOutlineDown } from "react-icons/ai";
import InputText from '../../components/UI/InputText';
import SelectInput from '../../components/UI/TablePaginationSelectInput';

const TablePagination = ({currentPage,currentItemsCount,dataList,itemsPerPage,indexOfLastItem,handlePrevious,handleNext}) => {
    return (
        <div className={styles.table_pagination_container}>
            <div className={styles.table_pagination}>
                <button 
                    className={styles.table_pagination__btn} 
                    onClick={() => handlePrevious(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <AiOutlineDown className={`${styles.icon_previous}`} />
                </button>
            
                <InputText value={currentPage} />  

                <div className={styles.middle}>{' de '+currentItemsCount/itemsPerPage}</div>
                
                <button 
                    className={styles.table_pagination__btn}
                    onClick={() => handleNext(currentPage + 1)}
                    disabled={indexOfLastItem >= currentItemsCount}
                >
                    <AiOutlineDown className={`${styles.icon_next}`} />
                </button>
                <SelectInput 
                    data={[
                        {id:1,text:itemsPerPage}
                    ]}
                    label={'Registros por paginas'}
                /> 
            </div>
        </div>
    )
}

export default TablePagination;