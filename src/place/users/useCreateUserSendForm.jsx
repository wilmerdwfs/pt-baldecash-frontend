import useHttpPost from '../../hooks/useHttpPost' 
import useCreateUserSendFormValidate from './useCreateUserSendFormValidate'
import useUserListData from './useUserListData'
import {useState,useEffect} from 'react'

const useLoginSendForm = () => {
  const {postData,errors,data,loading,loadingAdd} = useHttpPost()
  const {errorsForm,handleValidateForm} = useCreateUserSendFormValidate()
  const {loadData} = useUserListData()

  const handleOnClickSendForm   = async  (e,form) => {
    e.preventDefault()
    const isValid = handleValidateForm(form);

    if (isValid) {
      postData('users/create',form)
    }
  }

	return {data,errors,errorsForm,handleOnClickSendForm,loading,loadingAdd}
}

export default useLoginSendForm;