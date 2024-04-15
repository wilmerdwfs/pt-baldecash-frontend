import { useState , useEffect}  from 'react'

const useCreateUserSendFormValidate = () => {
    const [errorsForm,setErrorsForm] = useState([])
   
    const handleValidateForm = (form) => {
      
      const errors = [];

      if (!form.nombres) {
        errors.push('Digite los nombres');
        
      }
      if (!form.apellidos) {
        errors.push('Digite los apellidos');
        
      }
      if (!form.email) {
        errors.push('Digite el email');
       
      }
      if (!form.password) {
        errors.push('Digite la contraseña');
      }
      if (!form.rol) {
        errors.push('Selecione un rol');
      }
       if (form.rol) {
        if (form.rol==2) {
          errors.push('Selecione un rol');
        }
      }
      if (form.password) {
        if (form.password.length < 2 ) {
          errors.push('La contraseña debe tener mas de 2 caracteres');
        }
      }

      setErrorsForm(errors);

      return errors.length === 0;

    } 

    return {errorsForm,handleValidateForm}
}
export default useCreateUserSendFormValidate;