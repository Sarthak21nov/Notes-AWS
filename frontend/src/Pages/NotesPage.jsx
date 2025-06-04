import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function NotesPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const {id} = useParams()

  const HandleTitleChange = (e)=>{
    setTitle(e.target.value)
  }

  const HandleContentChange = (e)=>{
    setContent(e.target.value)
  }

  const HandleSubmit = async (e)=>{
    e.preventDefault()

    // Change url with AWS-URL
    try{
      const response = await axios.put(`https://notes-aws.duckdns.org:5000/api/v1/notes/${id}`, {
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
        alert("An Unknown error occurred")
    }
  }

  const loadData = async () => {
    // Change url with AWS-Backend url
    try{
      const response = await axios.get('https://notes-aws.duckdns.org:5000/api/v1/notes/getNotesBasedOnId', {
        withCredentials: true,
        params: {id: id}
      })
      if(response.data.success){
        setTitle(response.data.note.title)
        setContent(response.data.note.content)
      } else{
          alert(response.data.message)
      }
    } catch(err){
      alert("An unknown error occurred")
    }
  }

  useEffect(()=>{
    loadData()
  }, [])
  
  return (
    <div>
      <p className='p-4 font-serif bg-gradient-to-r from-pink-500 to-blue-400 text-center text-white text-2xl'>View or Edit Your Note</p>
      <input type='text' className='w-[97%] p-2 m-2 border-2 solid border-black h-[8vh] rounded-3xl shadow-xl' placeholder='Title' value={title} onChange={HandleTitleChange}/>
      <textarea className='w-[97%] p-2 m-2 border-2 solid border-black md:min-h-[60vh] min-h-[70vh] rounded-3xl shadow-xl' placeholder='Enter Your Note here' value={content} onChange={HandleContentChange}/>
      <div className='flex justify-center items-center'>
        <button className='p-3 m-2 bg-red-200 rounded-xl' onClick={HandleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default NotesPage