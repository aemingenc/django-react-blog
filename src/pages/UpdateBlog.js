import { Box } from '@mui/system'
import { useContext, useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'

const UpdateBlog = () => {
    const {currentUser} =useContext(AuthContext)
    
    const navigate=useNavigate()
    const {id}=useParams()
    
    const [blogInfo, setBlogInfo] = useState({
      id: '',
      user:currentUser.id || currentUser.pk,
      title: '',
      content: '',
      image:""
      
      
    });

    useEffect(() => {
      
      const getBlog = async (
        url = `http://127.0.0.1:8000/blog/card-detail/${id}/`
      ) => {
        
         await axios.get(url, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token" + localStorage.getItem("token"),
            },
          }).then((response)=>{console.log(response.data);
           setBlogInfo({...blogInfo,
            id:response.data.id,
            title:response.data.title,
            content:response.data.content,
            image:response.data.image

          });
           console.log(blogInfo)
            // navigate('/');
          }).catch((err)=>console.log(err))
          // console.log(result.data)
          //setBlogInfo(result?.data);
        } 
      
      getBlog();
      
    }, [id]);
    console.log("aeg",blogInfo)
      const updateHandler=async()=>{
        try {
          const token = JSON.parse(localStorage.getItem('token'));
          const  data  = await axios.put(`http://127.0.0.1:8000/blog/card-detail/${id}/`, blogInfo, {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            }
          });
         
          console.log(data)
          navigate('/');
        } catch (err) {}
      
            
          
      }
      console.log(currentUser)
    return (
        
        <div className='update-container'>
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
                
                value={blogInfo?.title}
                
                onChange={(e) =>
                  setBlogInfo({ ...blogInfo, title: e.target.value })
                }
              />
              <TextField
                required
                id="outlined-required"
                label="Image URL"
                
                value={blogInfo?.image}
                
                onChange={(e) =>
                  setBlogInfo({ ...blogInfo, image: e.target.value })
                }
                
              />
              <TextField
                required
                id="outlined-required"
                label="Content"
                
                value={blogInfo?.content}
                
                onChange={(e) =>
                  setBlogInfo({ ...blogInfo, content: e.target.value })
                }
                
              />
              <Button
              variant="contained"
              color="success"
              onClick={updateHandler}>Add</Button>
           
            </div>
          </Box>
        </div>
    )
}

export default UpdateBlog
