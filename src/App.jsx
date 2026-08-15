import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import HomePage from './landingPage/home/HomePage';
import Login from './landingPage/AuthenticationForm/Login';
import Register from './landingPage/AuthenticationForm/Register';
import UsersDataPage from './landingPage/UserDataPages/UsersDataPage';
import UserDataShowPage from './landingPage/UserDataPages/UserDataShowPage';
import UserPersonalData from './landingPage/UserDataPages/UserPersonalData';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/signup' element={<Login />} />
         <Route path='/register' element={<Register /> } />
         <Route path='/usersdatapage' element={<UsersDataPage/>} />
         <Route path='/userdata' element={<UserDataShowPage/>} />
         <Route path="/usersdata/:id" element={<UserPersonalData />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
