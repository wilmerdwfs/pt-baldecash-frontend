import InputText from '../../components/UI/InputText'
import Button from '../../components/UI/Button'
import Title from '../../components/UI/Title'
import Alert from '../../components/UI/Alert'
import styles from './Login.module.css'
import useLoginSetForm from './useLoginSetForm'
import useLoginSendForm from './useLoginSendForm'
import useLoginSendFormValidate from './useLoginSendFormValidate'

const Login = () => {
   const {handleOnChangeSetForm,form} = useLoginSetForm()
   const {handleOnClickSendForm,errorsForm,loading} = useLoginSendForm()

   return(
      <div className={styles.login}>
         <form className={styles.form} onSubmit={(e) => handleOnClickSendForm(e,form)}>
            <Title text={'Bienvenido al sistema'}/>
            <InputText 
               label="Correo electrónico" 
               name="email"
               onChange={handleOnChangeSetForm}
               type={"email"}
            /> 
            <InputText 
               label="Contraseña" 
               name="password" 
               onChange={handleOnChangeSetForm}
               type={"password"}
            /> 
            {errorsForm[0] && <Alert text={errorsForm[0]} />}
            <Button text="ENTAR" loading={loading}/>  
         </form>
      </div>
   )
}

export default Login;