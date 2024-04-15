import { useState , useEffect}  from 'react'

const useCreateUserShowModal = () => {
    const [showModal,setShowModal] = useState(false)
   
    const handleOnClickShoModal = () => {
      setShowModal(!showModal)
    } 

    return {showModal,handleOnClickShoModal}
}
export default useCreateUserShowModal;