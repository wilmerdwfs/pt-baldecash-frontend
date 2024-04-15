import styles from './Toggle.module.css'
import useCloseSession from './useCloseSession'
import { AiTwotoneLock } from "react-icons/ai"
import LoadingMin from '../../components/UI/LoadingMin';

const Toggle = () => {
	const {handleOnClickCloseSession,loading} = useCloseSession()

	return (
      <div className={styles.user__toggle}>
         <a 
            onClick={handleOnClickCloseSession} 
            className={styles.user__toggle_a}
         > 
            {loading && <LoadingMin/>} <AiTwotoneLock /> Cerrar sesión
         </a>
      </div>
	)
}
export default Toggle;