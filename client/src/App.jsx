import Auth from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx'
import Article from './components/Article.jsx'
import CreatePost from './components/CreatePost.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { useState,useEffect } from 'react'
import {Routes,Route,Navigate} from "react-router-dom"


import './App.css'

function App() {
useEffect(()=>{
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if(isLoggedIn){
     return <Navigate to = "/" replace/>
  } 
},[])
const [user,setLoginUser] = useState(false)
  return (
  
  <>
     <Navbar/>
    <Routes>
       <Route exact path='/' element = {<Article/>} />
       <Route path='/signUp' element={<Auth/>} /> 
       <Route path='/logIn' element={<LogIn setLoginUser={setLoginUser}/>} /> 
       <Route path='/create' element={<CreatePost/>} /> 
    </Routes>
     <Footer/>
  </>
 
   
  )
}

export default App
