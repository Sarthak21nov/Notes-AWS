import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

function DashboardCard(props) {
    const navigate = useNavigate();

    const HandleEdit = ()=>{
        const id = props.id
        navigate(`/notes/${id}`)
    }

    const HandleDelete = async ()=>{
        // Change url with backend url
        try{
            const id = props.id
            const response = await axios.delete(`http://localhost:5000/api/v1/notes/${id}`, {
                withCredentials: true
            })
            if(response.data.success){
                alert(response.data.message)
            } else{
                alert(response.data.message)
            }
        } catch(err){
            alert("An error occurred in deleting the note")
        }
    }

  return (
    <div>
        <div className='w-[250px] h-[200px] rounded-2xl shadow-2xl bg-slate-100 flex justify-center items-center'>
            <p className='text-lg text-center'>{props.title}</p>
        </div>
        <div className='flex gap-4 justify-center w-[250px] p-4'>
            <button className='w-[60px] h-[30px] bg-slate-100 hover:scale-110 transition transform duration-500' onClick={HandleEdit}>View</button>
            <button className='w-[60px] h-[30px] bg-slate-100 hover:scale-110 transition transform duration-500' onClick={HandleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default DashboardCard