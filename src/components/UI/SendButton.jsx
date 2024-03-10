import styles from './FormFields.module.css';
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";

const SendButton = ({ text,  onChange }) => (
  <button class={styles.button_send} onChange={onChange}>
    {text}
  </button>
);

export default SendButton;