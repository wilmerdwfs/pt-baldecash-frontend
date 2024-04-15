import styles from './Select.module.css'

const SelectInput = ({data,label,name,onChange,value}) => {
    return(<div className={styles.column}>
    	 <label className={styles.label}>{label}</label>
        <select className={styles.input} name="select" name={name} onChange={onChange} value={value}>
          {data.map((data) => (
              <option value={data.id}>{data.name}</option>
            ) )}
          
        </select>
   	</div>)
}
export default SelectInput;