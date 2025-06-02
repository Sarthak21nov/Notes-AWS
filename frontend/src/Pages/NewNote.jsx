import React from 'react'
import { useState } from 'react'
import axios from "axios"

function NewNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const HandleTitleChange = (e)=>{
    setTitle(e.target.value)
  }

  const HandleContentChange = (e)=>{
    setContent(e.target.value)
  }

  const HandleSubmit = async (e)=>{
    e.preventDefault()
    // Change the url to AWS-backend url
    try{
      const response = await axios.post('https://ec2-13-203-50-27.ap-south-1.compute.amazonaws.com:5000/api/v1/notes/addNotes', {
        title, content
      }, {
        withCredentials: true
      })

      if(response.data.success){
        alert(response.data.message)
      } else{
        alert(response.data.message)
      }
    } catch(err){
        alert("Error Adding the Note")
    }
  }
  
  return (
    <div>
      <p className='p-4 font-serif bg-gradient-to-r from-pink-500 to-blue-400 text-center text-white text-2xl'>Add Your new Note</p>
      <input type='text' className='w-[97%] p-2 m-2 border-2 solid border-black h-[8vh] rounded-3xl shadow-xl' placeholder='Title' value={title} onChange={HandleTitleChange}/>
      <textarea className='w-[97%] p-2 m-2 border-2 solid border-black md:min-h-[60vh] min-h-[70vh] rounded-3xl shadow-xl' placeholder='Enter Your Note here' value={content} onChange={HandleContentChange}/>
      <div className='flex justify-center items-center'>
        <button className='p-3 m-2 bg-red-200 rounded-xl' onClick={HandleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default NewNote