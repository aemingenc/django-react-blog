import React, { useContext,useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
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

    const deleteBlog = async ( ) => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .delete(`http://127.0.0.1:8000/blog/card-detail/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          
          },
          
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    
          navigate("/");
      };
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
        image={blogDetail.image}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3 className='card-title'>{blogDetail.title}</h3>
          
          <p style={{ fontSize: "10px" }}>
              {blogDetail.createdDate?.slice(0, 11)}
            </p>
        <Typography variant="body2" className='card-content' color="text.secondary">
          {blogDetail.content}
        </Typography>
      </CardContent>
      {/* <label name="comment">
              <input name="comment" type="textField" placeholder=' add comment here'onChange ={(e)=> setComment(e.target.value)}/>
              <button onClick={AddComment}>Add</button>
            </label> */}
      {blogDetail?.comments === undefined ? (
            console.log("nab")
          ) : blogDetail?.comments.lenght === 0 ? (
            <p>no comments</p>
          ) : (
            blogDetail?.comments?.map((item, index) => (
              <div key={index}>
                <p style={{ fontSize: "15px" }}>{item.comment}</p>
                <p style={{ fontSize: "10px" }}>
                  {item.createdDate.slice(0, 11)}
                </p>
              </div>
            ))
          )}

      <div className='card-email'>
      <IconButton>
            <FaUserCircle/>
          </IconButton>
          <p style={{ fontSize: "10px" }}>{blogDetail?.email}</p>
      
      </div>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <AiFillHeart/>
            <p style={{ fontSize: "10px" }}>{blogDetail?.likes_count}</p>
        </IconButton>
        <IconButton aria-label="share">
          <BiComment/>
          <p style={{ fontSize: "10px" }}>{blogDetail?.comments_count}</p>
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
                  onClick={() =>{ deleteBlog(blogDetail.id)
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
