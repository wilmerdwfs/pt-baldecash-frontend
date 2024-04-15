import useHttpPost from '../../hooks/useHttpPost' 
import useLoginSendFormValidate from './useLoginSendFormValidate'
import useLoginSendFormResponse from './useLoginSendFormResponse'
import {useEffect} from 'react'

const useLoginSendForm = () => {
  const {postData,errors,data,loading} = useHttpPost()
  const {errorsForm:errorsFormResponse,handleResponseForm} = useLoginSendFormResponse()
  const {errorsForm,handleValidateForm} = useLoginSendFormValidate(errorsFormResponse)

  useEffect(() => {
      if (data) {
        handleResponseForm(data)
      }
  },[loading])

  const handleOnClickSendForm = (e,form) => {
    e.preventDefault()
    const isValid = handleValidateForm(form)

    if (isValid) {
      postData('auth/login',form)
    }
  }
  
  return {data,errors,handleOnClickSendForm,loading,errorsForm}
}

export default useLoginSendForm;