import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userID, setUserID] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const HandleUserIDChange = (e)=>{
    setUserID(e.target.value)

  } 
  const HandlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }
  const HandleNameChange = (e)=>{
    setName(e.target.value)
  }
  const HandleSubmit = async (e)=>{
    e.preventDefault()

    if(name === userID){
      alert("Name and UserID should not be same")
      setName("")
      setUserID("")
    }

    // Change to url with the backend url
    try{
      const response = await axios.post('https://ec2-13-203-50-27.ap-south-1.compute.amazonaws.com:5000/api/v1/auth/register', {
        name, userID, password
      }, {
        withCredentials: true
      })

      if(response.data.success){
        alert(response.data.message)
        navigate('/')
      } else{
        alert(response.data.message)
      }

    } catch(err){
      alert("An unknown Error occurred, No issue from server side")
    }


    setName("")
    setPassword("")
    setUserID("")
  }
  return (
    <div>
      <Navbar/>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='md:w-[60vh] md:h-[60vh] w-[30vh] h-[55vh] shadow-2xl rounded-2xl md:mt-[20vh] mt-[60%] glow bg-slate-50'>
          <p className='text-center text-2xl p-3 font-serif mt-5'>New User? Signup Here</p>
          <form className='flex-col p-4'>
            <p className='text-xl p-2'>Name</p>
            <input type='text' className='w-full h-[30px] p-4 text-xl shadow-3xl rounded-full' placeholder='Enter Your Name' value={name} onChange={HandleNameChange} />
            <p className='text-xl p-2'>User-ID</p>
            <input type='text' className='w-full h-[30px] p-4 text-xl shadow-3xl rounded-full' placeholder='Enter User ID' value={userID} onChange={HandleUserIDChange} />
            <p className='text-xl p-2 mt-4'>Password</p>
            <input type='password' className='w-full h-[30px] p-4 text-xl shadow-3xl rounded-full' placeholder='Enter Password' value={password} onChange={HandlePasswordChange}/>
            <div className='w-full flex justify-center items-center'>
              <button className='p-2 bg-red-100 m-3 rounded-2xl' onClick={HandleSubmit}>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register