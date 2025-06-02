import React, { useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import '../App.css'

function Login() {

  const [userID, setUserID] = useState("")
  const [password, setPassword] = useState("")

  const HandleUserIDChange = (e)=>{
    setUserID(e.target.value)
  } 
  const HandlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }
  const HandleSubmit = ()=>{
    setPassword("")
    setUserID("")
  }
  return (
    <div>
      <Navbar/>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='md:w-[60vh] md:h-[45vh] w-[30vh] h-[40vh] shadow-2xl rounded-2xl md:mt-[30vh] mt-[60%] glow bg-slate-50'>
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
        </div>
      </div>
    </div>
  )
}

export default Login