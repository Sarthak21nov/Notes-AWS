import React from 'react'
import img from "../assets/img.jpg"

function NoFileFound() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='flex-row'>
            <p className='text-4xl text-center font-serif'>Nothing Added Yet!!!</p>
            <img src={img} className='w-[300px] h-[250px]'/>
        </div>
    </div>
  )
}

export default NoFileFound