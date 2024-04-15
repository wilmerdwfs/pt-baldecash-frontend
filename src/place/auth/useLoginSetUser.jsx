import useHttpPost from '../../hooks/useHttpPost' 
import useLoginSendFormValidate from './useLoginSendFormValidate'

const useLoginSetUser = () => {
  const {postData,errors,data,loading} = useHttpPost()
  const {errorsForm,handleValidateForm} = useLoginSendFormValidate()

  const handleOnClickSendForm = (e,form) => {
    e.preventDefault()
    const isValid = handleValidateForm(form)

    if (isValid) {
      postData('auth/login',form)
    }
  }
  
  return {data,errors,handleOnClickSendForm,loading,errorsForm}
}

export default useLoginSetUser;