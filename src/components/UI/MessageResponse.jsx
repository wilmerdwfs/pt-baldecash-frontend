import estilos from './MenssgeResponse.module.css'
import { AiFillLike } from "react-icons/ai";
import {useEffect,useState} from 'react'

const MessageResponse = (props) => {
    const [display,setDisplay] = useState('block')

    let color;
    switch (props.label) {
        case 'success':
            color = estilos.success
            break;
        case 'danger':
            color = estilos.danger
            break;
       
    }

    useEffect( () => {
        if (props.loading==true) {
            setTimeout(() => {
                setDisplay('none')
            },2000)
        }
    },[props.loading])
    
    return(
        <div className={`${estilos.mensaje_fondo} ${display}`}>
          <div className={estilos.mensaje__contenedor}>
                <p className={estilos.mensaje__p}>{props.message}</p>
                <span  className={`${estilos.mensaje}`}>
                    <AiFillLike className={estilos.temblor}/>
                </span>
            </div>
        </div>
    )

}
export default MessageResponse;