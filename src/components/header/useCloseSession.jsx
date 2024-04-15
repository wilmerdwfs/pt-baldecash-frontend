import { useNavigate} from 'react-router-dom'
import {useState,useContext} from 'react'
import fs from '../../services/TokenService'
import Context from '../../provider/Context'
import useHttpPost from '../../hooks/useHttpPost' 
import {useEffect} from 'react' 

const useCloseSession = () => {
  const navigate = useNavigate()
  const {setUser} = useContext(Context)
  const {postData,errors,data,loading,loadingAdd} = useHttpPost()

  useEffect(() => {
    if (loadingAdd===true) {

      fs.deleteToken();

      setTimeout(() => {

        setUser(null)
        navigate('/pt/login')

      },1000)

    }
  },[loadingAdd])
  
  const handleOnClickCloseSession = () => {
    postData('auth/close')
  }
  
  return {handleOnClickCloseSession,loading}
}

export default useCloseSession;