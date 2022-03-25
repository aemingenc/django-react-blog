import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "../pages/Login"
import Navbar from "../components/Navbar"
import Details from "../pages/Details"
import Main from "../pages/Main"
import NewBlog from "../pages/NewBlog"
import Register from "../pages/Register"
import UpdateBlog from "../pages/UpdateBlog"
import Profile from "../pages/Profile"

const AppRouter = () => {
    
    return (
        
      
      <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/newBlog" element={<NewBlog/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/upDate/:id" element={<UpdateBlog/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                   

                
            </Routes>
        </Router>
    )
}


export default AppRouter