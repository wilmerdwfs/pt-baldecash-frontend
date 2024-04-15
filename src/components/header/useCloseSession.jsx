import { useNavigate} from 'react-router-dom'
import {useState,useContext} from 'react'
import fs from '../../services/TokenService'
import Context from '../../provider/Context'

const useCloseSession = () => {
  const navigate = useNavigate()
  const {setUser} = useContext(Context)
  
  const handleOnClickCloseSession = () => {
    fs.deleteToken();

    setTimeout(() => {
      setUser(null)
      navigate('/pt/login')
    },2000)
    
  }
  
  return {handleOnClickCloseSession}
}

export default useCloseSession;