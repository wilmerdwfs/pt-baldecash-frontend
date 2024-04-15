import Title from '../../components/UI/Title'
import UserList from './UserList'
import useUserListData from './useUserListData'
import useUserListDelete from './useUserListDelete'
import {useEffect,useState} from 'react'
import PanelTop from '../../components/UI/PanelTop'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import CreateUser from './CreateUser'
import EditUser from './EditUser'
import useCreateUserShowModal from './useCreateUserShowModal'
import useCreateUserSendForm from './useCreateUserSendForm'
import useSetForm from '../../hooks/useSetForm'
import useEditUserData from './useEditUserData'
import useEditUserSendForm from './useEditUserSendForm'
import ProtectedRol from '../../services/ProtectedRol'
import SkeletonLoad from '../../components/UI/SkeletonLoad'
import MessageResponse from '../../components/UI/MessageResponse'

const User = () => {
   const {data,loadData,loading} = useUserListData()

   const [dataList,setDataList] = useState([])

   const {loading:loadingDelete,handleOnClickDataDelete,data:dataDelete,loadingAdd:loadingAddDelete} = useUserListDelete(data.dtUsers)
   const {showModal,handleOnClickShoModal} = useCreateUserShowModal()

   const {data:dataCreate,
           handleOnClickSendForm,
           errorsForm,
           loading:loadingCreateUser,
           loadingAdd:loadingAddCreateUser
   } = useCreateUserSendForm()
   
   const {handleOnChangeSetForm,form} = useSetForm({
      nombres:'',
      apellidos:'',
      email:'',
      password:'',
      rol:0,
   })
   
   const {handleLoadEdit,
          data:dataEdit,
          showModalEdit,
          handleOnClickShoModalEdit
   } = useEditUserData()

   const {handleOnClickEditUserSendForm,
   data:dataEditUserSend,
   loading:loadingEditUserSend,errorsForm:errorsFormEdit,
   loadingAdd:loadingAddEditUser
   } = useEditUserSendForm()
   
   useEffect(() => {
      setDataList(data.dtUsers)//asignar datos iniciales a una variable reactiva
   },[loading])

   useEffect(() => {
      if (dataDelete) {
         setDataList(dataDelete)
      }
   },[loadingDelete])//actualizar para la eliminacion

   useEffect(() => {
      if (dataCreate) {
         setDataList(dataCreate.dtUser)
      }
   },[loadingCreateUser])//actualizar para la creacion 

   useEffect(() => {
      if (dataEditUserSend) {
         setDataList(dataEditUserSend.dtUsers)
      }
   },[loadingEditUserSend])//actualizar para la edicion

   useEffect(() => {
     loadData()//cargando datos iniciales
   },[])
   
   return(
 
      <div className="panel">
         <Title text="LISTA DE USUARIOS"/> 
         <PanelTop 
            contentRigth={
               <ProtectedRol>
                  <Button 
                     text={'CREAR UN NUEVO USUARIO'} 
                     onClick={handleOnClickShoModal}
                  />
               </ProtectedRol>
            } 
            contentLeft={''} 
         />
         {
            dataList ? 
            (
               <UserList 
                  data={dataList}
                  onClickDelete = {handleOnClickDataDelete}
                  onClickLoadEdit = {handleLoadEdit}
               />
            ) 
            :<SkeletonLoad/>
         }
         {
            showModal && 
            (

               <Modal 
                  onClick={handleOnClickShoModal}
                  title={'CREAR UN NUEVO USUARIO'}
                > 
                  <CreateUser 
                     handleOnClickSendForm={handleOnClickSendForm}
                     handleOnChangeSetForm={handleOnChangeSetForm}
                     errorsForm={errorsForm}
                     loading={loadingCreateUser}
                     loadingAddCreateUser={loadingAddCreateUser}
                  /> 
               </Modal>
            )
         }

         { 
            showModalEdit && 
            (
               <Modal 
                  onClick={handleOnClickShoModalEdit}
                  title={'EDITAR USUARIO'}
               > 
                  <EditUser 
                     handleOnClickSendForm={handleOnClickEditUserSendForm}
                     handleOnChangeSetForm={handleOnChangeSetForm}
                     errorsForm={errorsFormEdit}
                     data={dataEdit.dtUser}
                     loading={loadingEditUserSend}
                     loadingAddEditUser={loadingAddEditUser}
                  /> 
               </Modal>
            )
         }
         {
            loadingAddDelete && 
            (
                  <MessageResponse loading={true} message={'Registro eliminado de forma correcta'}/>
            )
         }
      </div>
   )
}

export default User;