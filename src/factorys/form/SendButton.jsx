import styles from './Form.module.css';
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";

const SendButton = ({ text,  onChange }) => (
  <button 
    class={styles.button_send} 
    onChange={onChange}>
    {text}
  </button>
);

export default SendButton;