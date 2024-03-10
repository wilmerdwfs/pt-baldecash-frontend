import { useState , useEffect}  from 'react'
import data from './data'

const useDatList = () => {
    const [dtList,setDtList] = useState([])
    const [error,setError] = useState([])
 
    
    useEffect(() => {
        try{
            setDtList(data)
        }catch(e) {
            setError(e)  
        };
      
    },[])
    return {dtList,error}
}
export default useDatList;