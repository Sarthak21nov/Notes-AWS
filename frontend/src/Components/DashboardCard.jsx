import React from 'react'
import {useNavigate} from "react-router-dom"

function DashboardCard(props) {
    const navigate = useNavigate();

    const HandleEdit = ()=>{
        // const id = props.id
        const id = "46785567"
        navigate(`/notes/${id}`)
    }

    const HandleDelete = ()=>{
        const id = props.id
    }

  return (
    <div>
        <div className='w-[250px] h-[200px] rounded-2xl shadow-2xl bg-slate-100 flex justify-center items-center'>
            <p className='text-lg text-center'>{props.title}</p>
        </div>
        <div className='flex gap-4 justify-center w-[250px] p-4'>
            <button className='w-[60px] h-[30px] bg-slate-100' onClick={HandleEdit}>View</button>
            <button className='w-[60px] h-[30px] bg-slate-100' onClick={HandleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default DashboardCard