import useHttpGet from '../../hooks/useHttpGet' 
import useCreateUserShowModalEdit from './useCreateUserShowModalEdit'
import {useState} from 'react'

const useEditUserData = () => {
  const {showModalEdit,handleOnClickShoModalEdit} = useCreateUserShowModalEdit()
  const {getData,errors,data,loading} = useHttpGet()

  const handleLoadEdit = async  (id) => {
    handleOnClickShoModalEdit()
    getData('users/edit',id)
  }
	return {showModalEdit,showModalEdit,data,errors,loading,handleLoadEdit,handleOnClickShoModalEdit}
}

export default useEditUserData;