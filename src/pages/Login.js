import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useState,useContext} from "react";
import kus from "../assets/kus.jpg"
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext';

const Login = ()=> {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const [username,setUsername] = useState()
    const {currentUser,setCurrentUser} = useContext(AuthContext)
    const handleSubmit = async () => {

        try {
            const res = await axios({
              method: "post",
              url: "http://127.0.0.1:8000/users/auth/login/",
              data: {
                username: username,
                password: password,
                email:email,
              },
              headers: {
                
                "content-type": "application/json",
              },
            })
            localStorage.setItem('id',JSON.stringify(res.data.user.id));
            localStorage.setItem('token', JSON.stringify(res.data.key));
            console.log(res.data);
            setCurrentUser(res.data.user)
            
            navigate('/');
          } catch (err) {}
        
       
    }
  
    console.log(currentUser)
  
    return (
    <div className="container">
        <div>
            <img className='img-head' src={kus} alt="" />
            <h1>--- Login---</h1>
        </div>

        <div>
            <Box
                className='box'
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
                        label="Email"
                        placeholder="Email"
                        onChange = {(e)=> setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="username"
                        placeholder="Username"
                        onChange = {(e)=> setUsername(e.target.value)}
                    />
            
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        onChange ={(e)=>setPassword(e.target.value)}
                    />
                
                <Button 
                variant="contained"
                onClick={handleSubmit}
                value="Login"
                >LOG IN</Button>
            </div>
            </Box>
        </div>
    </div>
  );
}
export default Login;