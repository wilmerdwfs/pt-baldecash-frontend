import {useState} from 'react'

const useLoginSetForm = () => {
  const [ form, setFrom ] = useState({
    email:'',
    password:'',
  })

  const handleOnChangeSetForm = (e) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      [name]:value
    })

  }

	return {handleOnChangeSetForm,form}
}

export default useLoginSetForm;