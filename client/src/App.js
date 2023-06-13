import React, { useContext } from 'react'
import {BrowserRouter , Route , NavLink , Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';

import Menu from './components/Util/Menu'
import Home from './components/Default/Home';
import Contact from './components/Default/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Pnf from './components/Util/Pnf';
import { GlobalContext } from './GlobalContext';
import ProtectedRoute from './AuthGuard/ProtectedRoute';
import Header from './components/Util/Header';
import Footer from './components/Util/Footer';



export default function App() {
const context = useContext(GlobalContext)
const[isLogged] = context.auth.isLogged
const[isUser] = context.auth.isUser
const[isAdmin] = context.auth.isAdmin
  
  return (
    <BrowserRouter>
    <Header/>
      <Menu/>
    <ToastContainer position={'top-center'} autoClose={4000}/>
    <Routes>
      <Route path={'/'} element = {<Home/>}/>
      <Route path={'/contact'} element = {<Contact/>}/>
      <Route path={'/login'} element = {<Login/>}/>
      <Route path={'/register'} element = {<Register/>}/>
{
  isLogged && isUser ?(
  <Route element = {<ProtectedRoute/>}>
    <Route path={'/user/dashboard'} element = {<UserDashboard/>}/>
  </Route>
  ):null
},
{ isLogged && isAdmin ?(

  <Route element = {<ProtectedRoute/>} >
    <Route path={'/admin/dashboard'} element = {<AdminDashboard/>}/>
  </Route>
):null
},
   
      <Route path={'/*'} element = {<Pnf/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
