import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import AllDoctors from './components/AllDoctors'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DoctorDetails from './components/DoctorDetails'
import Specality from './components/Specality'
import Login from './components/Login'
import Appointments from './components/Appointments'

const App = () => {
  return (
    <div className='mx-24' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alldoctors' element={<AllDoctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path='/specality' element={<Specality />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App