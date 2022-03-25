import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import kus from "../assets/kus.jpg"
import axios from 'axios'

export default function Register() {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password1,setPassword1] = useState();
    const [password2,setPassword2] = useState();
    const [username,setUsername] = useState();

    const handleSubmit = async ()=> {

        try {
            const res = await axios({
              method: "post",
              url: "http://127.0.0.1:8000/users/register/",
              data: {
                "username": username,
                "first_name": "",
                "last_name": "",
                "email": email,
                "password": password1,
                "password2": password2
              },
              headers: {
                
                "content-type": "application/json",
              },
            })
            console.log(res.data)
            
            navigate('/login');
          } catch (err) {}
       
    }
  return (
    <div className="container">
        <div>
            <img  className='img-head'src={kus} alt="" />
            <h1>--- Register---</h1>
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
                        onChange ={(e)=> setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                        onChange ={(e)=> setEmail(e.target.value)}
                    />
            
                    <TextField
                        id="outlined-password-input"
                        label="Password1"
                        autoComplete="current-password"
                        onChange = {(e)=> setPassword1(e.target.value)}
                    />
                     <TextField
                        id="outlined-password-input"
                        label="Password2"
                        autoComplete="current-password"
                        onChange = {(e)=> setPassword2(e.target.value)}
                    />
                
                <Button variant="contained" onClick ={handleSubmit} value="Register">REGİSTER</Button>
            </div>
            </Box>
        </div>
    </div>
  );
}