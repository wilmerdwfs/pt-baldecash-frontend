import styles from './ToolTop.module.css'

const ToolTop = ({children}) => {
   return (
   	<div className={styles.tool_top}>
            {children}
      </div>
    )
}

export default ToolTop;