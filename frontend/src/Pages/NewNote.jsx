import React from 'react'
import { useState } from 'react'

function NewNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const HandleTitleChange = (e)=>{
    setTitle(e.target.value)
  }

  const HandleContentChange = (e)=>{
    setContent(e.target.value)
  }

  const HandleSubmit = ()=>{
    setTitle("")
    setContent("")
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