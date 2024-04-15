import styles from './Header.module.css'
import HeaderToolRight from './HeaderToolRight'

const Header = () => {
   return (
      <header className={styles.header}>
   	  <HeaderToolRight/>
      </header>
   )
}

export default Header;