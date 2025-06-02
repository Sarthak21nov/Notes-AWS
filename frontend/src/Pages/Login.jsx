import React, { useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import '../App.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Login() {

  const [userID, setUserID] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const HandleUserIDChange = (e)=>{
    setUserID(e.target.value)
  } 
  const HandlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }

  const NavigateToRegister = () => {
    navigate('/register')
  }

  const HandleSubmit = async (e)=>{

    e.preventDefault()
    
    // Change url with AWS-backend url
    try{
      const response = await axios.post('https://ec2-13-203-50-27.ap-south-1.compute.amazonaws.com:5000/api/v1/auth/login',{
        userID, password
      }, {
         withCredentials: true
      })
      console.log(response)
      if(response.data.success){
        alert(response.data.message)
        localStorage.setItem("Name", response.data.user)
        navigate('/Dashboard')
      } else{
        alert(response.data.message)
      }
    } catch(err){
      console.error("Login failed", error);
      alert(error.response?.data?.message || "Something went wrong!");
    }

    setPassword("")
    setUserID("")
  }
  return (
    <div>
      <Navbar/>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='md:w-[60vh] md:h-[45vh] w-[30vh] h-[36vh] shadow-2xl rounded-2xl md:mt-[30vh] mt-[60%] glow bg-slate-50'>
          <p className='text-center text-2xl p-3 font-serif mt-5'>Login to Continue</p>
          <form className='flex-col p-4'>
            <p className='text-xl p-2'>User-ID</p>
            <input type='text' className='w-full h-[30px] p-4 text-xl shadow-3xl rounded-full' placeholder='Enter User ID' value={userID} onChange={HandleUserIDChange} />
            <p className='text-xl p-2 mt-4'>Password</p>
            <input type='password' className='w-full h-[30px] p-4 text-xl shadow-3xl rounded-full' placeholder='Enter Password' value={password} onChange={HandlePasswordChange}/>
            <div className='w-full flex justify-center items-center'>
              <button className='p-2 bg-red-100 m-3 rounded-2xl' onClick={HandleSubmit}>Login</button>
            </div>
          </form>
          <div className='flex'>
            <h4 className='ml-2'>Doesn't have an Account? Create one here: </h4>
            <p className='ml-4 text-blue-500 hover:cursor-pointer' onClick={NavigateToRegister}>Register</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login