import { useState,useEffect }  from 'react'

const useLoginSendFormValidate = (message) => {
    const [errorsForm,setErrorsForm] = useState([])

    useEffect(() => {
      if (message.length>0) {
        setErrorsForm([message])
      }else{
        setErrorsForm([])
      }
    },[message])
   
    const handleValidateForm = (form) => {
      
      const errors = [];

      if (!form.email) {
        errors.push('Digite el correo electrónico');
      }
      if (!form.password) {
        errors.push('Digite la contraseña');
      }

      setErrorsForm(errors);

      return errors.length === 0;

    } 

    const cambiar = (message) => {
      setErrorsForm([message])
    }
  
    return {errorsForm,handleValidateForm,cambiar}
}
export default useLoginSendFormValidate;