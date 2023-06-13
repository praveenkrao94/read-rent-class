import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

function useAuthApi() {
    const[token,setToken] = useState(false)
    const [currentUser ,setCurrentUser] = useState(null)

    const[isLogged , setIsLogged] = useState(false)

    const[isAdmin,setIsAdmin] = useState(false)
    const[isUser , setIsUser] = useState(false)

    let loginstatus = new Boolean(localStorage.getItem("loginStatus")) || false


    const getToken = useCallback(()=>{
            let readAuthToken = async()=>{
                let res = await axios.get(`/api/v1/auth/token`)
                console.log('token' , res.data)
                setToken(res.data.authToken)
                let res1 = await axios.get(`/api/v1/auth/current/user`, {
                    headers:{
                        Authorization : res.data.authToken
                    }
                })
                setCurrentUser(res1.data.currentUser)
                setIsLogged(true)
                if(res1.data.currentUser.role === "superadmin"){
                    setIsAdmin(true)
                }else if(res1.data.currentUser.role === "user"){
                    setIsUser(true)
                }
            }
            
            if(loginstatus == true){
                readAuthToken()
            }
    },[])

    useEffect(()=>{
        if(loginstatus == true){

            getToken()
        }
    },[])
  return {
    token:[token,setToken],
    currentUser:[currentUser,setCurrentUser],
    isAdmin:[isAdmin,setIsAdmin],
    isLogged:[isLogged , setIsLogged],
    isUser:[isUser , setIsUser]
  }
}

export default useAuthApi
