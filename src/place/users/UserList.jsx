import Table from '../../components/UI/Table'
import styles from '../../components/UI/Table.module.css'
import ButtonAction from '../../components/UI/ButtonAction'
import ProtectedRol from '../../services/ProtectedRol'
import StateRol from '../../components/UI/StateRol'

const UserList = ({data,onClickDelete,onClickLoadEdit}) => {
   return(
     data.map((data) => (
         <div key={data.id} className={styles.tr}> 
            <div className={styles.td}>{data.id} </div>  
            <div className={styles.td}>
               {data.nombres} 
            </div> 
            <div className={styles.td}>
               {data.apellidos}  
            </div> 
            <div className={styles.td}>{data.email} </div>  
            <div className={styles.td}> <StateRol state={data.rol}/> </div>
            <div className={styles.td}> {data.fecha} </div> 
            <div className={styles.td}>
              <ProtectedRol>
                  <ButtonAction 
                     text={'Editar'} 
                     onClick={() => onClickLoadEdit(data.id)}
                  /> 
                  <ButtonAction 
                     text={'Eliminar'} 
                     color="delete" 
                     onClick={() => onClickDelete(data.id)}
                  /> 
               </ProtectedRol>
            </div>    
         </div>
      ))
   )
}

const headTable = ["Id",
                   "Nombres",
                   "Apellidos",
                   "Correo electrónico",
                   "Rol", "Fecha de registro",
                   "Acción"
                  ]; 
export default Table(UserList,headTable);