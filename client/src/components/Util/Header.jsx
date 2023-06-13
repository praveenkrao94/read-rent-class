import React from 'react'

function Header() {
  return (
    <header className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className="container justify-content-between">
        <div>
            <i className='bi bi-phone text-light'></i>
            <span className='text-light'>&nbsp;</span>
            <strong className='text-warning'>+91:8660435935</strong>&nbsp;
            <i className='bi bi-envelope text-light'></i>
            <span className='text-light'>&nbsp;</span>
            <strong className='text-warning'>support@bePractical.com</strong>&nbsp;
        </div>
        <div>
            <strong className="text-warning">Follow-us</strong>&nbsp;
            <i className="bi bi-facebook text-light"></i>&nbsp;
            <i className="bi bi-twitter text-light"></i>&nbsp;
            <i className="bi bi-instagram text-light"></i>&nbsp;
            <i className="bi bi-github text-light"></i>&nbsp;
        </div>
      </div>
    </header>
  )
}

export default Header
