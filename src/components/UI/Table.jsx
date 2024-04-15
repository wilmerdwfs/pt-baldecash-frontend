import styles from '../../components/UI/Table.module.css';

const Table = (WrappedComponent,headTable) => {
   
    return function Table(props){
        return(
            <div className={styles.container_table}>
                <div className={styles.tr_head}>
                    {headTable.map((header, index) => (
                        <div key={index} className={styles.th}>{header}</div>
                    ))}
                </div>
                <div className={styles.table}>
                    <WrappedComponent {...props} />
                </div>
            </div>
        );

    }
}
export default Table;