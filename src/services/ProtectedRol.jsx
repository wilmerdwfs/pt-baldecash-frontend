import Context from '../provider/Context'
import {useContext} from 'react'

const ProtectedRol = ({children}) => {
	const {user} = useContext(Context)

	if (user.rol===0) {
		return  '';
	}
    
    return children
}

export default ProtectedRol;