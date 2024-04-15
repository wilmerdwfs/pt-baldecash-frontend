import styles from './IconUser.module.css'
import { AiOutlineUser } from "react-icons/ai";

const IconUser = ({onClick}) => {
	return (
      <div className={styles.user__toggle} onClick={onClick}>
          <AiOutlineUser className={styles.user__toggle_icon} />
      </div>
	)
}
export default IconUser;