import styles from './Form.module.css';
import { AiOutlineDown } from "react-icons/ai";

const SeletInput = ({ label, value, onChange,data }) => (
  <div className={styles.column}>
    <select className={`${styles.input} ${styles.select}`}  placeholder={label} >
      {data.map((data) => (
         <option value={data.id}>{data.text}</option>
      ))}
    </select>
    <AiOutlineDown className={`${styles.icon_select}`} />
  </div>
);

export default SeletInput;