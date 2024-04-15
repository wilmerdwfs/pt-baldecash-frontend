import { useState , useEffect}  from 'react'

const useCreateUserShowModalEdit = () => {
    const [showModalEdit,setShowModalEdit] = useState(false)
   
    const handleOnClickShoModalEdit = () => {
      setShowModalEdit(!showModalEdit)
    } 

    return {showModalEdit,handleOnClickShoModalEdit}
}
export default useCreateUserShowModalEdit;