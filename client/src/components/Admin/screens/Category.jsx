import React, { useEffect  ,useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { GlobalContext } from '../../../GlobalContext'
import {toast} from 'react-toastify'

function Category() {
  const context = useContext(GlobalContext)
  const [token] = context.auth.token
  const[categories,setCategories] = useState([])

const readCategories = async ()=>{
      const res = await axios.get('/api/category/all',{
          headers:{
              Authorization:token
          }
      })
      setCategories(res.data.Categories)
}

  useEffect(()=>{
    readCategories()
  },[])


  const deletHandler = async(id)=>{
    if(window.confirm("Do you like to delelte this category?")){
      await axios.delete(`api/category/delete/${id}`, {
        headers:{
          Authorization:token
        }
      })
      .then(res=>{
        toast.success('Deleted Succesfully')
        window.location.reload()
      })
      .catch(err => {
        toast.error("not able to delete")
      })
    }
  }

  return (
    <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-5 text-success">Category list</div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <table className="table table-bordered table-striped table-hovered text-center">
                      <thead>
                        <tr>
                          <th colSpan={4}>
                            <NavLink to={'/admin/category/add'}  className="btn btn-outline-success float-end">Add New</NavLink>
                          </th>
                        </tr>
                        <tr>
                          <th>Title</th>
                          <th>Description</th>
                          <th>isActive</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {
                          categories && categories.map((item,index)=>{
                            return (
                              <tr className="text-center">
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>{item.isActive ? 'Active': "in-Active"}</td>
                                <td>
                                  <NavLink to={`/admin/category/edit/${item._id}`} className="btn btn-info btn-sm">
                                    <i className="bi bi-pencil"></i>
                                  </NavLink>
                                  <button className="btn btn-danger btn-sm float-end" onClick={()=> deletHandler(item._id)} >
                                    <i className="bi bi-trash"></i>
                                  </button>
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

export default Category
