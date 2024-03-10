import styles from './Form.module.css';
import FormsFactory from '../../factorys/form/FormFactory';
import HandlersFactory from '../../factorys/HandlersFactory';
import useSubmit from '../../hooks/useSubmit';
import {useState,useEffect,to} from 'react';
import {Navigate,useHistory ,Route} from 'react-router-dom';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { data ,handleSubmit } = useSubmit()
    
    if (data.length) {
        return <Navigate to="/pbt/misdesembolsos"/>;
    }
  
    return(
        <form className={styles.form} onSubmit={handleSubmit} >
            <div className={styles.form__head}>
                <div className={styles.form_head__logo}>
                    <img className={styles.img_spot} src={'./img/logo.svg'} /> 
                </div> 
                <div className={styles.form__head_foter}>
                    <h3 className={styles.form__head_subtitle}>Suflipay</h3>
                    <p className={styles.form__p}>Administrador comercial</p>
                </div> 
            </div> 
            <div className={styles.form__body}>
                {FormsFactory.createEmailInput({
                    label: 'Correo Electrónico', 
                    value: 'mail.@usermail.com',
                    onChange: () => {}
                })}
                {FormsFactory.createPasswordInput({ 
                    label: 'Contraseña', 
                    value: password,
                    value: '123456688889999',
                    onChange:() => {}
                })}
            </div> 
            <div className={styles.form__footer}>
                {FormsFactory.createSendButton({ 
                    text: 'INGRESAR',
                    onChange:handleSubmit
                })}
                <a href="#" className={styles.form__footer_a}>No recuerdo mi contraseña</a>
            </div> 
        </form>
    )
}
export default Form;