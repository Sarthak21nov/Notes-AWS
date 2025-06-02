import React, { useEffect, useState } from 'react'
import NoFileFound from './NoFileFound'
import DashboardCard from '../Components/DashboardCard'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Dashboard() {
  const[notes, setNotes] = useState([])
  const navigate = useNavigate()

  let user = localStorage.getItem("Name")
  const AddNewNote = ()=>{
    navigate('/newNote')
  }

  const loadNotes = async () => {
    // Change url with backend url
    try{
      const response = await axios.get('http://localhost:5000/api/v1/notes/getNotes', {
        withCredentials: true
      })
      if(response.data.success){
        setNotes(response.data.notes)
      } else{
        alert("Error fetching Data from db")
      }
    } catch(err){
        alert("Error fetching data")
    }
  }

  useEffect(() => {
    loadNotes()
  }, [])

  useEffect(()=>{
    loadNotes()
  }, [notes])

  return (
    <div>
      <p className='text-center font-serif text-3xl text-white bg-gradient-to-r p-5 from-pink-500 to-blue-400'>Welcome {`${user}`}</p>
      <div className='mt-5 flex justify-evenly flex-wrap'>
        {notes && notes.length > 0 ? (
          notes.map((note, index)=>(
           <DashboardCard title={note.title} id={note._id} key={index} />
          ))
        ):(
            <NoFileFound/>
        )}
      </div>
      <div className="fixed bottom-6 right-6 z-10">
        <button
          className="w-14 h-14 rounded-full bg-red-400 text-white text-3xl shadow-lg hover:bg-red-500 transition duration-300"
          onClick={AddNewNote}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Dashboard