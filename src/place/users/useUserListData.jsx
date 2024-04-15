import useHttpGet from '../../hooks/useHttpGet' 
import {useState,useEffect} from 'react'

const useUserListData = () => {
  const {getData,errors,data,loading} = useHttpGet()
  
  const loadData = (e) => {
    getData('users','')
  }

	return {data,errors,loadData,loading}
}

export default useUserListData;