import {useState} from 'react'

const useSideBarShow = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const handleOnClickShowDideBar = (e) => {
    setShowSideBar(!showSideBar)
  }

  return {showSideBar,handleOnClickShowDideBar}
}

export default useSideBarShow;