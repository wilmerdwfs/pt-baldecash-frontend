import styles from './PanelTop.module.css'

const PanelTop = ({children}) => {
   return (
   	    <div className={styles.panel_top}>
            {children}
        </div>
    )
}

export default PanelTop;