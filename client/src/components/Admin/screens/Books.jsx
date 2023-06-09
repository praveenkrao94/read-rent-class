import React, { useEffect  ,useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { GlobalContext } from '../../../GlobalContext'
import {toast} from 'react-toastify'

function Books() {
    const context = useContext(GlobalContext)
    const [token] = context.auth.token
    const[books,setBooks] = useState([])

const readBooks = async ()=>{
        const res = await axios.get('/api/book/all',{
            headers:{
                Authorization:token
            }
        })
        setBooks(res.data.books)
}

    useEffect(()=>{
        readBooks()
    },[])

const deleteHandler = async(id)=>{
    if(window.confirm('Are You Sure to Delete this Book')){
        await axios.delete(`/api/book/delete/${id}`,{
            headers:{
                Authorization:token
            }
        }).then(res=>{
                toast.success(res.data.msg)
                window.location.reload()
        }).catch(err =>{
                toast.error(err.response.data.msg)
        })
    }
}
    if(books.length === 0){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5 className="display-5 text-success">No book Available</h5>
                            <NavLink to={'/admin/book/add'} className='btn btn-success mt-5'></NavLink>
                        </div>
                    </div>
                </div>
            )
    }

  return (
    <div>
      <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-5 text-success">Books list</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped table-hover">
                            <thead className='text-center' >
                                <tr>
                                    <th colSpan={6}>
                                        <NavLink to={'/admin/book/add'} className='btn btn-success float-end' >Add New Book</NavLink>
                                    </th>
                                </tr>
                                <tr >
                                    <th>Title</th>
                                    <th>image</th>
                                    <th>Author</th>
                                    <th>Pages</th>
                                    <th>Price</th>
                                    <th>ACtions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books && books.map((item,index)=>{
                                        const{title,image,author,pages,price,_id} = item
                                        return(
                                            <tr className='text-center' key={index} >
                                                <td>{title}</td>
                                                <td>
                                                    <img src={image.url ? image.url:'#'} alt="" className='img-fluid' width={150} />
                                                </td>
                                                <td>{author}</td>
                                                <td>{pages}</td>
                                                <td>&#8377;{price}</td>
                                                <td>
                                                    <NavLink to={`/admin/book/edit/${_id}`} className='btn btn-link' >Edit</NavLink>
                                                    <NavLink to={`/admin/book/details/${_id}`} className='btn btn-link' >Details</NavLink>
                                                    <button className='btn btn-link' onClick={()=> deleteHandler(_id)}>Delete</button>
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
    </div>
  )
}

export default Books
