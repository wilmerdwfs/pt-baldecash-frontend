import useHttpPut from '../../hooks/useHttpPut' 
import useCreateUserSendFormValidate from './useCreateUserSendFormValidate'

const useEditUserSendForm = () => {
  const {putData,errors,data,loading,loadingAdd} = useHttpPut()
  const {errorsForm,handleValidateForm} = useCreateUserSendFormValidate()

  const handleOnClickEditUserSendForm   = async  (e,form) => {
    e.preventDefault()
    const isValid = handleValidateForm(form)

    if ( isValid) {
      putData('users/edit-save',form)
    }
  }

	return {data,errors,errorsForm,handleOnClickEditUserSendForm,loading,loadingAdd}
}

export default useEditUserSendForm;