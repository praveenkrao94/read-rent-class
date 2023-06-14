import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-center">
        <div className="row">
            <div className="col-md-12">
                <div className="text-light">
                    <strong>&copy;</strong>
                    <NavLink className='btn btn-link'>BookRent.com - 2023</NavLink>
                    <strong>All Right Reserved</strong>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
