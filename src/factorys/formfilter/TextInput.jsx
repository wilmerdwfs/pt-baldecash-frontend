import styles from './Form.module.css';
import { AiOutlineCalendar } from "react-icons/ai";

const TextInput = ({ label, value, onChange }) => (
  <div className={styles.column}>
    <input 
      placeholder={label} 
      className={styles.input} 
      type="text" value={value} 
      onChange={onChange} 
    />
  </div>
);

export default TextInput;