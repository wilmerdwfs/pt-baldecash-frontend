import styles from './HeaderToolRight.module.css'
import useSwich from '../../hooks/useSwich'
import Toggle from './Toggle'
import LabelUser from './LabelUser'
import IconUser from './IconUser'

const HeaderToolRight = () => {
   const {show,handleOnClickShow}  = useSwich()
   return (
      <div className={styles.header__tool_right}>
        <LabelUser/>
        <IconUser onClick={handleOnClickShow}/>
   	  {show && <Toggle/>}
      </div>
   )
}

export default HeaderToolRight;