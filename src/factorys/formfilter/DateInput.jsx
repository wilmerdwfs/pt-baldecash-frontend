import styles from './Form.module.css';
import { AiOutlineCalendar } from "react-icons/ai";

const DateInput = ({ label, value, onChange }) => (
  <div className={styles.column}>
    <input 
      placeholder={label} 
      className={styles.input} 
      type="date" 
      value={value} 
      onChange={onChange} 
    />
    <AiOutlineCalendar  className={styles.icon_date}/>
  </div>
);

export default DateInput;