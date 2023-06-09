import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user,setuser] = useState({
        
        email:"",
        password:"",
    })
    const navigate = useNavigate()
    const readValue = (e)=>{
        const {name , value} = e.target
        setuser({...user , [name]:value})
    }

    const submitHandler = async(e)=>{
        try{
            e.preventDefault()
            console.log('new user =' , user)
            await axios.post(`/api/v1/auth/login` , user)
            .then((res)=>{
                toast.success(res.data.msg)
                localStorage.setItem("loginStatus" , true)
                navigate('/')
            }).catch((err)=>{
                toast.error(err.response.data.msg)
            })
        }
        catch (err) {
            toast.error(err.msg)
        }
    }
  return (
    <div className='container'>
    <div className="row mb-4">
        <div className="col-md-12 text-center">
            <div className="display-3 text-success">
                User Login
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <form autoComplete='off' onSubmit={submitHandler}>
                        
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name='email' id='email' value={user.email} onChange={readValue} className='form-control' required />
                        </div>
                        
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' value={user.password} onChange={readValue} className='form-control' required />
                        </div>
                        <div className="from-group mt-2">
                            <input type="submit" value= 'Login' className='btn btn-outline-success'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
