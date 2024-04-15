import InputText from '../../components/UI/InputText'
import Select from '../../components/UI/Select'
import Button from '../../components/UI/Button'
import Title from '../../components/UI/Title'
import Alert from '../../components/UI/Alert'
import useSetForm from '../../hooks/useSetForm'
import {useEffect,useState} from 'react'
import MessageResponse from '../../components/UI/MessageResponse'

const EditUser = ({handleOnClickSendForm,errorsForm,data,loading,loadingAddEditUser}) => {
   const {handleOnChangeSetForm,form,handleValIni} = useSetForm()

   useEffect(() => {
      if (data) {
         handleValIni({
            id:data.id,
            nombres: data.nombres,
            apellidos: data.apellidos,
            email: data.email,
            rol: data.rol,
         })
      }
   },[data])
   
   return(
      data && <div>
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
            {errorsForm[0] && <Alert text={errorsForm[0]} />}
            {
               loadingAddEditUser && 
               (
                  <MessageResponse loading={loading} message={'Registro editado de forma correcta'}/>
               )
            }
            <Button 
               text="ACTUALIZAR"
               onClick={() => {}}
               loading={loading}
            />  
         </form>
      </div>
   )
}

export default EditUser;