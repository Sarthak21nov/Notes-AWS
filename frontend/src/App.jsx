import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import './App.css'
import NewNote from './Pages/NewNote.jsx'
import NotesPage from "./Pages/NotesPage.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Login/>}/>
        <Route path = '/register' element= {<Register/>}/>
        <Route path = '/Dashboard' element={<Dashboard/>}/>
        <Route path = '/newNote' element={<NewNote/>}/>
        <Route path = '/notes/:id' element={<NotesPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
