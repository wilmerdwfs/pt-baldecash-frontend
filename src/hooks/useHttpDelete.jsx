import {useState} from 'react'
import {API_URL} from '../storage/API_URL'
import fs from '../services/TokenService'

const  useHttpDelete = () => {
    const [data, setData] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false);
    const [loadingAdd, setLoadingAdd] = useState(false);
    const [token, setToken] = useState('');
    
    const deleteData = async (url,form) => {
        const fvUser = fs.getToken();

        const options = {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${fvUser.token}`,
            },
            body: JSON.stringify(form)
        }
        
        try {
            setLoading(true);
            const response  = await fetch(`${API_URL}`+url,options) 
            const data = response.json()
            
            data.then((data) => {
                setLoading(false);
                setData(data);
                setLoadingAdd(true);
                setTimeout(() => {
                   setLoadingAdd(false);
                },2000)
           }).catch(error => {
               setErrors(error)
           });
           
        } catch (error) {
            setErrors(error)
        }
    }

	return {deleteData,data,errors,loading,loadingAdd}
}

export default useHttpDelete;