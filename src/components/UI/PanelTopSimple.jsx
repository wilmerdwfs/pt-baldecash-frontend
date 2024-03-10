import styles from './PanelTopSimple.module.css'
import { AiOutlineRight } from "react-icons/ai";

const PanelTopSimple = ({children,onClick}) => {
   return (
   	<div className={styles.panel_top_simple}>
         <div className={styles.logo}>
            <img src={'./img/subLogo.svg'}/>
         </div>
         <div className={styles.accion}>
            <button onClick={onClick} className={styles.button}>
               Cerrar sesión <AiOutlineRight  className={styles.icon} />
            </button>
         </div>
      </div>
    )
}

export default PanelTopSimple;