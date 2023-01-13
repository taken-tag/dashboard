import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar"
import Loader from '../components/Loader'
import LeftSidebar from "../components/LeftSidebar";
import RightSide from "../components/RightSide";
export default function dashboard() {
  const [loader, setLoader] = useState(true)
  const [showMenu, setShowMenu] = useState(true);
  const [showUserData, setShowUserData] = useState()
  const router = useRouter()

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("userData"))
    
    if(!(userData)){
      router.push('/')
    }

    if(userData){
      setShowUserData(userData.user)
      setLoader(false)
    }
  }, [])
  

  return (
    <div>
     {loader && <Loader/>}
     {!loader && <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showUserData={showUserData}/>}
     {!loader && 
     <div className="w-[100%] h-[calc(100vh-70px)]    flex mt-[70px]">
        <LeftSidebar showMenu={showMenu} />
        <RightSide showMenu={showMenu}/>
      </div>
     }
    </div>
  )
}
