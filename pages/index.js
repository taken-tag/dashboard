import React, {useEffect, useState} from "react"
import HomePage from "../components/HomePage"
import Loader from '../components/Loader'
import { useRouter } from 'next/router'
 function Home(){
  const [loader, setLoader] = useState(true)
  const router = useRouter()
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("userData"))
    if(!(userData)){
      setLoader(false)
    }

    if(userData){
      setLoader(true)
      router.push("/dashboard")
    }
  }, [])
     return(
      <>
        <div>
          {loader && <Loader/>}
          {!loader &&  <HomePage/> }
        </div>
      </>
     )
}

export default Home
