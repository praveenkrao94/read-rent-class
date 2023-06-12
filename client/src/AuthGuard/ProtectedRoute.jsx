import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
    let loginStatus = JSON.parse(localStorage.getItem("loginStatus")) || false
  return (
    <>
      loginStatus ? <Outlet/> : <Navigate to={'/login'} />
    </>
  )
}
