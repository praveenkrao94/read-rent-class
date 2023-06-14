import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { GlobalContext } from '../../../GlobalContext'

function BookDetails() {

    const context = useContext(GlobalContext)
    const [token] = context.auth.token

const[book,setBook]=  useState(false)
    const params = useParams()

    const readSingle = async ()=>{
        try{
const res = await axios.get(`/api/book/single/${params.id}`,{
            headers:{
                    Authorization:token
            }
        });
        setBook(res.data.book)
        } catch (err){
                toast.error(err.response.data.msg)
        }
    }

    useEffect(()=>{
        readSingle()
    })

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-center">
                    Book Details
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <img src={book? book.image.url:null} className='card-img-top' alt="no image" />
                    <div className="card-body">
                        <h5 className="text-success text-center display-5 text-uppercase">{book.title}</h5>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Price</strong>
                                <span className="float-end text-success">{book.price}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Author</strong>
                                <span className="float-end text-success">{book.author}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Category</strong>
                                <span className="float-end text-success">{book.category}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Description</strong>
                                <span className="float-end text-success">{book.desc}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Rent Cost</strong>
                                <span className="float-end text-success">{book.rentCost}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Number of Copies</strong>
                                <span className="float-end text-success">{book.numberofCopy}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>ISBN</strong>
                                <span className="float-end text-success">{book.isbn}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Available</strong>
                                <span className="float-end text-success">{book.isAvailable ? 
                                <span className='badge bg-success text-light'>Available</span>:
                                <span className='badge bg-danger text-light'>Not Available</span>
                            }</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Active</strong>
                                <span className="float-end text-success">{book.isActive}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
