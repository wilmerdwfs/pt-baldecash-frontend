import Context from './Context'
import { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import fs from '../services/TokenService'
import useBadRoute from '../hooks/useBadRoute'

const Proveedor = ({ children }) => {
  useBadRoute()
  const fvUser = fs.getToken()

  let idUsu
  let email
  let rol
  let storeUser

  if (fvUser) {
    storeUser = {
      idUsu:fvUser.idUsu,
      email:fvUser.email,
      rol:fvUser.rol
    }
  }else{
    storeUser = null
  }

  const navigate = useNavigate();
  
  const [user,setUser] = useState(storeUser)

  const dataShared = {
    user: user,
    setUser: setUser,
  };

  return (
    <Context.Provider value={dataShared}>
      {children}
    </Context.Provider>
  );
};

export default Proveedor;