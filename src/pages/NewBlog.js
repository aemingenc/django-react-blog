import React, { useState } from 'react'
import {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import kus from "../assets/kus.jpg"
import axios from "axios"
const NewBlog = () => {
  
    const {currentUser} =useContext(AuthContext)
    const [newPost, setNewPost] = useState({
      "user": "",
      "title": "",
      "image": "",
      "content": "",
      "email":""
      });
      const navigate=useNavigate();
      const getNewBlog = async()=> {
        
          await axios({
            method: "post",
            url: "http://127.0.0.1:8000/blog/post/",
            data: {
              "user": currentUser.pk,
              "title": newPost.title,
              "image": newPost.image,
              "content": newPost.content,
              "email":currentUser.email
            }
            
          }).then((response)=>{console.log(response.data);
          
            navigate('/');
          }).catch((err)=>console.log(err))
          
        
      
        console.log(newPost)
    
  }
  console.log(currentUser)
  console.log(newPost)
      
  //     const getNewBlog = async()=> {
        
  //       try {
  //          await axios.post("http://127.0.0.1:8000/blog/list/",
  //          {
  //            "user": currentUser?.username,
  //            "title": newPost?.title,
  //            "image": newPost?.image,
  //            "content":newPost?.content 
  //          })
  //          .then(res => console.log(res))
  //          .catch(err =>console.log(err))
  //         navigate('/');
  //       } catch (err) {}
      
     
  // }
      
      
    return (


      <div className="container">
        <div >
          
            <img className='img-head' src={kus} alt="" />
            <h1>--- New Blog---</h1>
        </div>
        <Box className='box'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="login-form">
              <TextField
                required
                id="outlined-required"
                label="Title"
                placeholder="Title"
                value ={newPost?.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
              />
              <TextField
                required
                id="outlined-required"
                label="URL"
                placeholder="Image URL"
                value ={newPost?.image}
                onChange={(e) =>
                    setNewPost({ ...newPost, image: e.target.value })
                  }
              />
              <TextField
                required
                id="outlined-required"
                label="Content"
                placeholder="Content"
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                
              />
              <Button
              variant="contained"
              color="success"
              onClick={getNewBlog}>Add</Button>
              
              
            </div>
          </Box>
    </div>
  );
}
//         <div>
//             <input
//              type="text"
//              value ={newPost.title}
//              onChange={(e) =>
//                 setNewPost({ ...newPost, title: e.target.value })
//               }
//              />
//             <input 
//             type="text" 
//             value ={newPost.url}
//             onChange={(e) =>
//                 setNewPost({ ...newPost, url: e.target.value })
//               }
//             />
//             <input 
//             type="text" 
//             value = {newPost.content}
//             onChange={(e) =>
//                 setNewPost({ ...newPost, content: e.target.value })
//               }
//             />
//             <button
//             onClick={getNewBlog}>add</button>
//         </div>
//     )
// }

 export default NewBlog
