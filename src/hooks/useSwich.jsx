import { useState , useEffect}  from 'react'

const useSwich = () => {
    const [show,setShow] = useState(false)
   
    const handleOnClickShow = () => {
      setShow(!show)
    } 

    return {show,handleOnClickShow}
}
export default useSwich;