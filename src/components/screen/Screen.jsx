import styles from './Screen.module.css';

const Screen = ({children}) => {
    return(
        <div  className={styles.screen}>
            {children}
        </div>
    )
}
export default Screen;