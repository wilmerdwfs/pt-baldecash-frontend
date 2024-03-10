import styles from './Form.module.css';

const PasswordInput = ({ label, value, onChange }) => (
  <div className={styles.column}>
    <label className={styles.label}>{label}</label>
    <input placeholder={value} className={styles.input} type="password" value={value} onChange={onChange} />
  </div>
);

export default PasswordInput;