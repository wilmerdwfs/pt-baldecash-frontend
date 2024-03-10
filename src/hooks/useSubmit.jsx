import { useState , useEffect}  from 'react'

const useSubmit = () => {
    const [data,setData] = useState([])
    const [error,setError] = useState({})
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('none')
        setData([
            {   
                message: 'success',
                dtUser:[''],
                status:'200'
            }]
        )
    } 

    return {data,handleSubmit}
}
export default useSubmit;