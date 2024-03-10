import styles from './FormFields.module.css';
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";

const SendButton = ({ text,  onChange }) => (
  <button class={styles.button_general} onChange={onChange}>
    <AiOutlineVerticalAlignBottom class={styles.button_general_icon} /> {text}
  </button>
);

export default SendButton;