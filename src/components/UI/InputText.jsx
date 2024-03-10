import styles from './FormFields.module.css';

const TextInput = ({ label, value, onChange }) => (
  <div className={styles.column}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </div>
);

export default TextInput;