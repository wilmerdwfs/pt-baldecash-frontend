import {useState,useEffect} from 'react'

const useSetForm = (initialData) => {
  
  const [ form, setFrom ] = useState({ 
                            nombres: '',
                            apellidos: '',
                            email: '',
                            rol: 2
                          })
  
  const handleOnChangeSetForm = (e) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      [name]:value
    })

  }

  const handleValIni = (valIni) => {
    setFrom(valIni)
  }

	return {handleOnChangeSetForm,form,handleValIni }
}

export default useSetForm;