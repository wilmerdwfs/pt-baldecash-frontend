import {useState,useEffect} from 'react'
import useUserListData from './useUserListData'
import useHttpDelete from '../../hooks/useHttpDelete' 

const useUserListDelete = (dataList) => {
  const [data, setData] = useState(null);

   useEffect(() => {
      setData(dataList)
   },[])

  const {loadData} = useUserListData()
  const {deleteData,errors,loading,loadingAdd} = useHttpDelete()
  
  const handleOnClickDataDelete = (id,url) => {
      const form = {
        id:id
      }
      deleteData('users/delete',form)
      let newDataList;
      if (data) {
        newDataList = data.filter(item => item.id !== id);
        
      }else{
        newDataList = dataList.filter(item => item.id !== id);
      }
      setData(newDataList)
  }
  
  return {loading,data,handleOnClickDataDelete,loadingAdd}
}

export default useUserListDelete;