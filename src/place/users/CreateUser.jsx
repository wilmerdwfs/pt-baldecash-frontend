import InputText from '../../components/UI/InputText'
import Select from '../../components/UI/Select'
import Button from '../../components/UI/Button'
import Title from '../../components/UI/Title'
import Alert from '../../components/UI/Alert'
import useSetForm from '../../hooks/useSetForm'
import MessageResponse from '../../components/UI/MessageResponse'
import {useEffect} from 'react'

const CreateUser = (
   {
      handleOnclickCreateUser,
      handleOnClickSendForm,
      errorsForm,
      loading,
      loadingAddCreateUser
   }) => {
   
   const {handleOnChangeSetForm,form,handleValIni} = useSetForm()
     
   useEffect(() => {
      handleValIni({
         nombres:'',
         apellidos:'',
         email:'',
         password:'',
         rol:2
      })
   },[loadingAddCreateUser])//limpiar formulario

   return(
      <div>
         <form className={'form'} onSubmit={(e) => handleOnClickSendForm(e,form)}>
            <InputText 
               label="Nombres" 
               name="nombres"
               onChange={handleOnChangeSetForm}
               type={"text"}
               value={form && form.nombres}
            /> 
            <InputText 
               label="Apellidos" 
               name="apellidos" 
               onChange={handleOnChangeSetForm}
               type={"text"}
               value={form && form.apellidos}
            /> 
            <InputText 
               label="Correo electrónico" 
               name="email" 
               onChange={handleOnChangeSetForm}
               type={"email"}
               value={form && form.email}
            />
            <InputText 
               label="Contraseña" 
               name="password" 
               onChange={handleOnChangeSetForm}
               type={"password"}
               value={form && form.password}
            />
            <Select 
               label="Rol" 
               name="rol" 
               onChange={handleOnChangeSetForm}
               data={[
                  {id:2,name:'Seleccione...'},
                  {id:0,name:'Revisor'},
                  {id:1,name:'Administrador'}
               ]}
               value={form && form.rol}
            />
            {loadingAddCreateUser && 
               (
                  <MessageResponse loading={loading} message={'Registro exitoso'}/>
               )
            }
            {errorsForm[0] && <Alert text={errorsForm[0]} />}
            <Button 
               text="CREAR"
               onClick={handleOnclickCreateUser}
               loading={loading}
            />  
         </form>
      </div>
   )
}

export default CreateUser;