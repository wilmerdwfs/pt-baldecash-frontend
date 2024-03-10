import styles from './ToolTopSimple.module.css'
import Button from './Button'

const ToolTopSimple = ({title,textButton,onChange}) => {
   return (
   	  <div className={styles.tool_top_simple}>
           <h1 className={styles.title}>{title}</h1>  
           <Button text={textButton} />
        </div>
    )
}

export default ToolTopSimple;