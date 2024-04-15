import styles from './ButtonAction.module.css';
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";

const ButtonAction = ({ text,  onClick, color }) => (
  <button className={`${styles.button_action} ${color =='delete' ? styles.btn_delete_color : styles.btn_edit_color}`} onClick={onClick}>
     {text}
  </button>
);

export default ButtonAction;