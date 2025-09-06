import React from 'react'
import Home from './Pages/Home'
import UserContext from './Context/UserContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserContext>
      <Home />
      <ToastContainer/> 
    </UserContext>
  )
}

export default App
