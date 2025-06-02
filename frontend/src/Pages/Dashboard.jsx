import React, { useState } from 'react'
import NoFileFound from './NoFileFound'
import DashboardCard from '../Components/DashboardCard'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const[notes, setNotes] = useState({})
  const navigate = useNavigate()

  let user = localStorage.getItem("Name")
  const AddNewNote = ()=>{
    navigate('/newNote')
  }

  return (
    <div>
      <p className='text-center font-serif text-3xl text-white bg-gradient-to-r p-5 from-pink-500 to-blue-400'>Welcome {`${user}`}</p>
      <div className='mt-5'>
        {notes && notes.length > 0 ? (
          notes.map((note, index)=>(
           <DashboardCard title={note.title} id={note._id} key={index} />
          ))
        ):(
            <NoFileFound/>
        )}
      </div>
      <div className='flex justify-end w-[30px] h-[30px] z-10 fixed'>
        <button className='w-[40px] h-[40px] rounded-full bg-red-200 ml-5 z-10 fixed translate-x-[60%] translate-y-[-20%] text-2xl' onClick={AddNewNote}>+</button>
      </div>
    </div>
  )
}

export default Dashboard