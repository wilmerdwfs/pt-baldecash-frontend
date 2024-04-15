import {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import HelperBadRoute from '../helpers/HelperBadRoute'
import { useNavigate} from 'react-router-dom'

const useBadRoute = () => {
  const currentPath = window.location.pathname;
  const parts = currentPath.split('/'); 
  const ruote = parts[2];
  const navigate = useNavigate()
  
  useEffect(() => {
    if (ruote!='usuarios' && ruote!='login') {
      navigate('/pt/ruta-invalida')
    }
  },[])
}

export default useBadRoute;