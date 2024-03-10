import styles from './Login.module.css';
import Form from './Form';
import BackgroundLogin from './BackgroundLogin';

const Login = () => {
    return(
        <div className={styles.over_screen}> 
            <BackgroundLogin>
    	       <Form/>
            </BackgroundLogin>
        </div>
    )
}
export default Login;