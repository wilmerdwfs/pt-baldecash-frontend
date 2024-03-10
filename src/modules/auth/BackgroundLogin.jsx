import styles from './BackgroundLogin.module.css';

const BackgroundLogin = ({children}) => {
    return(
        <div  className={styles.background}>
            <div className={styles.freckles_spot_left}>
                <img className={styles.img_freckles} src={'./img/freckles.svg'} /> 
                <img className={styles.img_spot} src={'./img/spot.svg'} /> 
            </div>
            <img className={styles.img_ornament_left} src={'./img/ornamentLeft.svg'} /> 
            {children}
            <img className={styles.img_ornament_right} src={'./img/ornamentRight.svg'} /> 
            <div className={styles.freckles_spot_right}>
                <img className={styles.img_freckles_right} src={'../img/freckles.svg'} /> 
                <img className={styles.img_spot_right} src={'./img/spot.svg'} /> 
            </div>
        </div>
    )
}
export default  BackgroundLogin;