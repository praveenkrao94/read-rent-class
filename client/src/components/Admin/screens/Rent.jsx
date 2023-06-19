import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../GlobalContext'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

function Rent() {


  const[rent , setRent] = useState([])
  const context = useContext(GlobalContext)
  const[token] = context.auth.token

    const readrentList = async ()=>{
        const res = await axios.get(`/api/rent/all`,{
          headers:{
            Authorization:token
          }
        })
        setRent(res.data.rents)
    }
    useEffect(()=>{
      readrentList()
    },[])

  return (
   
      <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-5 text-success">Rent List</div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                   <table className="table table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th colSpan={8}>
                          <NavLink to={`/admin/rented/add`} className="btn btn-success float-end">Add new</NavLink>
                        </th>
                      </tr>
                      <tr className='text-center'>
                        <th>Book title</th>
                        <th>Book Image</th>
                        <th>User Name</th>
                        <th>Amount</th>
                        <th>Rented Date</th>
                        <th>Return Date</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        rent && rent.map((item,index)=>{
                          const{_id,user,book,amount,returndate,rentdate,paymentStatus}= item
                          return (
                              <tr className='text-center' key={index}>
                                <td>{book.title}</td>
                                <td>
                                  <img src={book.image ? book.image.url :"#"} alt="" className='img-fluid' width={150} height={150}/>
                                </td>
                                <td>{user.name}</td>
                                <td>&#8377;{amount}</td>
                                <td>{rentdate}</td>
                                <td>{returndate}</td>
                                <td>{paymentStatus}</td>
                                <td>
                                  <NavLink to={`/admin/rented/edit/${_id}`} className="btn btn-link">Details</NavLink>
                                  <NavLink to={`/admin/rented/details/${_id}`} className="btn btn-link">Details</NavLink>
                                  <button className='btn btn-link'>Delete</button>
                                </td>
                              </tr>
                          )
                        })
                      }
                    </tbody>
                   </table>
                  </div>
                </div>
            </div>
    
  )
}

export default Rent
