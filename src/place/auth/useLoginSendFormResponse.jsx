import { useState }  from 'react'
import fs from '../../services/TokenService'
import useLoginSendFormValidate from './useLoginSendFormValidate'
import { useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import Context from '../../provider/Context'

const useLoginSendFormResponse = () => {
    const [errorsForm,setErrorsForm] = useState([])
    const navigate = useNavigate();
    const {user,setUser} = useContext(Context)

    const handleResponseForm = (data) => {
      const errors = [];
      
      if (data.status===200) {
        setErrorsForm([]);
        fs.setToken(data.user)
        setUser({
          ...user,
          idUsu: data.user.idUsu,
          email: data.user.email,
          rol:data.user.rol
        })
        navigate('/pt/usuarios')
        
      }else{
        errors.push(data.message);
      }
      
      setErrorsForm(errors);
    } 

    return {errorsForm,handleResponseForm}
}
export default useLoginSendFormResponse;