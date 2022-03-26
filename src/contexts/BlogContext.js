import { createContext,useEffect,useState } from "react";
import axios from 'axios'
import React from "react";


export  const BlogContext = createContext()

const BlogContextProvider = (props) => {

    const [currentInfo,setCurrentInfo] =useState()
    
    
     
    useEffect(() => {
      const fetchData = async () =>{
        try{
           const res = await axios.get("http://127.0.0.1:8000/blog/list/");
           setCurrentInfo(res.data);
           console.log(res.data);
         }
         catch(err){
   
         }
   
       }
       fetchData();
    
        
      }, []);

   



    return(
        <BlogContext.Provider value ={{currentInfo}}>
            {props.children}
        </BlogContext.Provider>
    )
    }
export default BlogContextProvider;