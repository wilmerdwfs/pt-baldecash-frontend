import styles from './InputText.module.css';

const TextInput = ({ label, value,name, onChange, type }) => (
  <div className={styles.column}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default TextInput;