import styles from './Button.module.css';
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import LoadingMin from './LoadingMin';

const SendButton = ({ text, onClick,loading }) => (
  <button class={styles.button_general} onClick={onClick}>
    {loading && <LoadingMin/>}  {text}
  </button>
);

export default SendButton;