import {useState} from 'react'
import {API_URL} from '../storage/API_URL'
import fs from '../services/TokenService'

const  useHttpGet = () => {
    const [data, setData] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');

    const getData = async (url,par) => {
        const fvUser = fs.getToken();
        
        let search =  '/'+par;
        if (par==='') {
          search = '';
        }

        const options = {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${fvUser.token}`,
            },
        }

        try {
            setLoading(true);
            const response  = await fetch(`${API_URL}`+url+search,options) 
            const data = response.json()

            data.then((data) => {
                setLoading(false);
                setData(data);
           }).catch(error => {
               setErrors(error)
           });
           
        } catch (error) {
            setErrors(error)
        }
    }

	return {getData,data,errors,loading}
}

export default useHttpGet;