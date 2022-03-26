import React, { useContext } from 'react'
import Card from "../components/Card"
import { BlogContext } from '../contexts/BlogContext'
const Main = () => {

     const {currentInfo} = useContext(BlogContext)

    //  function refreshPage() {
    //     window.location.reload(false);
    //   }

    //   useEffect(() => {
    //    refreshPage()
    //   }, [])
      



    return (
        <div className='card-container'>
            
           {currentInfo === undefined ? (console.log("nab")) :(currentInfo?.length ===0 ? (
           <p>Proje yok</p>) :( 
               //console.log(contactList)
            currentInfo?.map((item,index)=>(
                <div  key ={index}>
                    
               <Card userItems={item}  />
                </div>
           ))) 
           )}
        </div>
    )
}

export default Main
