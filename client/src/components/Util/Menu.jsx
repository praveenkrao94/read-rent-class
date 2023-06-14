import React , {useContext}from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


 function Menu(props) {
  const context = useContext(GlobalContext)
  const[isLogged] = context.auth.isLogged
  const[isUser] = context.auth.isUser
  const[isAdmin] = context.auth.isAdmin


const navigate = useNavigate()


  const logoutHandler = async()=>{
    if(window.confirm('are you Sure')){
    await axios.get(`/api/v1/auth/logout`)
    .then(res =>{
      toast.success(res.data.msg)
      navigate('/')
      localStorage.removeItem('loginStatus')
      window.location.href ='/';
    }).catch(err => toast.error(err.msg))
  }else{
    return; 
  }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary" >
  <div className="container">
    <NavLink to={'/'} className="navbar-brand" >Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {
      isLogged ? (
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className='navbar-nav me-5'>
        <li className='nav-item btn-group'>
          <NavLink className= "nav-link dropdown-toggle" data-bs-toggle = "dropdown" >
          Account
          </NavLink>
          <ul className='dropdown-menu text-center'>
            <li>
              {
                isUser ? (
                  <React.Fragment>
                    <li>
                    <NavLink to={'/user/dashboard'} className='dropdown-item' >User Dashboard</NavLink>
                    </li>
                  </React.Fragment>
                ) :null
              }
            </li>
            
            {
                isAdmin ? (
                  <React.Fragment>
                    <li>
                    <NavLink to={'/admin/dashboard'} className='dropdown-item' >Admin Dashboard</NavLink> 
                    </li>
                    <li>
                    <NavLink to={'/admin/books/list'} className='dropdown-item' >Books</NavLink> 
                    </li>
                    <li>
                    <NavLink to={'/admin/category/list'} className='dropdown-item' >Category</NavLink> 
                    </li>
                    <li>
                    <NavLink to={'/admin/rented/list'} className='dropdown-item' >Rent</NavLink> 
                    </li>
                    <li>
                    <NavLink to={'/admin/customers/list'} className='dropdown-item' >Customers</NavLink> 
                    </li>
                  </React.Fragment>
                ):null
              }
            <li>
              <NavLink to={'/login'} className='dropdown-item btn btn-danger' onClick={logoutHandler} >Logout</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      </div>
      ):(
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item">
    <NavLink to={'/'} className="nav-link" >Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to={'/contact'} className="nav-link" >Contact</NavLink>
  </li>
</ul>
<ul className="navbar-nav">
  <li className="nav-item">
    <NavLink to={'/login'} className="nav-link" >Login</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to={'/register'} className="nav-link" >Register</NavLink>
  </li>
</ul>
</div>
      )
    }
  </div>
</nav>
  )
}

export default Menu


