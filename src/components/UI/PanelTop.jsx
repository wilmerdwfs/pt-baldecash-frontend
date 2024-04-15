import styles from './PanelTop.module.css'

const PanelTop = ({contentLeft,contentRigth}) => {
   return (
   	<div className={styles.panel_top}>
         {contentLeft} {contentRigth}
      </div>
    )
}

export default PanelTop;