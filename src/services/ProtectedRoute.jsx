import Context from '../provider/Context'
import {useContext} from 'react'
import { useNavigate} from 'react-router-dom'

const ProtectedRol = ({children}) => {
	const {user} = useContext(Context)
	const navigate = useNavigate()

	if (!user) {
		setTimeout(() => {
			navigate('/pt/login')
		},100)

	}else{
        return children
    }
}

export default ProtectedRol;