import styles from './LoadingMin.module.css'

const LoadinMin = (props) => {
    return(
        <div className={styles.background}>
            <span className={styles.message}>
                <span className={styles.loader}></span>
            </span>
        </div>
    )
}
export default LoadinMin;