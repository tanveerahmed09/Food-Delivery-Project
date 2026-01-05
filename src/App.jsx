import React from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App