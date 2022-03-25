
import {getDatabase,ref,push,set, remove, update } from "firebase/database"



export const addInfo = (info)=>{
    const db =getDatabase();
    const userRef = ref (db,"contact")
    const newUserRef = push(userRef)
    set(newUserRef,{
        userEmail:info.userEmail,
        title: info.title,
        url:info.url,
        content:info.content,
        date:info.date
    })
    console.log("veri eklendi")
}

export const deleteInfo =(id) =>{
    const db=getDatabase();
  // const userRef = ref(db,"contact");
  remove(ref(db,"contact/"+id))
  
}
export const updateInfo =(info)=>{
    const db =getDatabase();
    
    
    
    const updates = {}
    updates["contact/"+info.id]=info
    return update(ref(db),updates)
}





















// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { auth, googleProvider } from "../helpers/firebase";

//     const {currentUser}= useContext(AuthContext)
  
// function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//     }
  
// function login(email, password) {
//       return auth.signInWithEmailAndPassword(email, password);
//     }
  
// function logout() {
//       auth.signOut();
//     }
  
// function loginWithGoogle() {
//       googleProvider.setCustomParameters({ prompt: "select_account" });
//       auth.signInWithPopup(googleProvider);
//     }
  
// function resetPassword(email) {
//       return auth.sendPasswordResetEmail(email);
//     }
  
// function updateEmail(email) {
//       return currentUser.updateEmail(email);
//     }
  
// function updatePassword(password) {
//       return currentUser.updatePassword(password);
//     }
  
    
  
