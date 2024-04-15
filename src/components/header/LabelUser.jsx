import styles from './LabelUser.module.css'
import { AiOutlineUser } from "react-icons/ai";
import Context from '../../provider/Context'
import {useContext} from 'react'

const LabelUser = ({onClick}) => {
  const {user} = useContext(Context)
	return (
      <div className={styles.user__label}>
        {user.email}
      </div>
	)
}
export default LabelUser;