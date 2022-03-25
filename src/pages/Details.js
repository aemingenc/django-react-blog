import React, { useContext,useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { deleteInfo } from '../helpers/functions'
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  AiFillHeart} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import {FaUserCircle } from "react-icons/fa";
import axios from 'axios'




const Details = () => {

    const {currentUser} =useContext(AuthContext)

    const {id}=useParams()
    const navigate =useNavigate()
    const [blogDetail ,setBlogDetail] = useState([])
 
    
    const updateHandler =(id)=>{
        navigate(`/upDate/${id}`)
    }
   
    useEffect(() => {
      
      const getBlogDetail = async (
        url = `http://127.0.0.1:8000/blog/card-detail/${id}/`
      ) => {
        try {
          const result = await axios.get(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token" + localStorage.getItem("token"),
            },
          });
          setBlogDetail(result?.data);
        } catch (err) {
         
        }
      }  
      getBlogDetail();
      
    }, [id]);
    console.log(currentUser)

    return (
        <div className='detail-container'>
           
           <Card sx={{ minWidth: 300 ,minHeight:400}}>
      
      <CardMedia
        className='detail-img'
        style={{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}}
        component="img"
        height="140"
        image={blogDetail.url}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3 className='card-title'>{blogDetail.title}</h3>
          
          <p>may 17,2021</p>
        <Typography variant="body2" className='card-content' color="text.secondary">
          {blogDetail.content}
        </Typography>
      </CardContent>
      <div className='card-email'>
      <IconButton>
            <FaUserCircle/>
          </IconButton>
      <p>{blogDetail?.user}sed</p>
      <p>{currentUser?.id}la</p>
      </div>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <AiFillHeart/>
        </IconButton>
        <IconButton aria-label="share">
          <BiComment/>
        </IconButton>
      </CardActions>
      {currentUser.pk===blogDetail.user ?(
      <div className='details-button'>
        <Button
                  variant="contained"
                  onClick={()=>updateHandler(blogDetail.id)}
                >
                  Update
        </Button>
        <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>{ deleteInfo(blogDetail.id)
                  navigate("/")}}
                >
                  Delete
        </Button>
        </div>     
      ): null}
                   
               
               
           
      
    </Card>
)
           
        
        </div>
    )
}

export default Details
