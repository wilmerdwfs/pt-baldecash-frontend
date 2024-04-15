import styles from './Alert.module.css';
import { AiFillCloseCircle } from "react-icons/ai";

const Alert = ({ text }) => (
  <div className={styles.alert}>
     <AiFillCloseCircle className={styles.alert__icon} /> <p className={styles.alert__p}> {text}</p>
  </div>
);

export default Alert;