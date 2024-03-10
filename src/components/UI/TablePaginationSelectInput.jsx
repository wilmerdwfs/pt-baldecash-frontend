import styles from './TablePaginationSelectInput.module.css';
import { AiOutlineDown } from "react-icons/ai";

const TablePaginationSelectInput = ({ label, value, onChange,data }) => (
  <div className={styles.column}>
    <select className={`${styles.select}`}  placeholder={label} >
      {data.map((data) => (
         <option value={data.id}>{data.text}</option>
      ))}
    </select>
    <label className={styles.label}>{label}</label>
    <AiOutlineDown className={`${styles.icon_select}`} />
  </div>
);

export default TablePaginationSelectInput;