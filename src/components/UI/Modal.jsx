import styles from './Modal.module.css'
import { useContext } from 'react'
import { AiOutlineArrowLeft as IconAtras,AiOutlineClose as IconX} from "react-icons/ai";

const Modal = ({children,title,modalCerrar,onClick}) => {
    const handleOnClick = () => {
        onClick(false);
    }

    return (
        <div className={styles.modal}> 
            <div className={styles.modal__content}> 
                <div className={styles.modal__header}>
                    <button 
                        className={styles.button_close}
                        onClick={onClick}
                    > 
                        <IconX/> 
                    </button>
                    <h3>{title}</h3>
                </div>
                <div className={styles.modal__body}> 
                    {children}
                </div> 
            </div>   
        </div>     
    )
}

export default Modal;