import styles from './Form.module.css';

const EmailInput = ({ label, value, onChange }) => (
  <div className={styles.column}>
    <label 
      className={styles.label}
    >
      {label}
    </label>
    <input 
      placeholder={value} 
      className={styles.input} 
      type="text" value={value} 
      onChange={onChange} 
    />
  </div>
);

export default EmailInput;