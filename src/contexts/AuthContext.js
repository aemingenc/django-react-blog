import { createContext,useState,useEffect } from "react";

import React from "react";


export  const AuthContext = createContext()



const AuthContextProvider = (props) => {

    const [currentUser,setCurrentUser] =useState({})
    const token = JSON.parse(localStorage.getItem("token"))
  console.log(token)
   
    
    useEffect(() => {
     
        const fetchData = async () =>{
            try{
                const data = await fetch("http://127.0.0.1:8000/users/auth/user/", {
            headers: {
              Authorization: `Token ${token}`
            }
          }).then(res => res.json());
          // console.log(data);
           setCurrentUser(data)
            console.log(data);
              }
              
            
            catch(err){
      
            }
      
          }
      
          fetchData();
    }, [])
    console.log("auth",currentUser)
    
    

    return(
        <AuthContext.Provider value ={{currentUser,setCurrentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;