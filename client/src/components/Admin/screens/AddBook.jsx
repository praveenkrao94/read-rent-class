import React, { useCallback, useContext, useEffect, useState } from 'react'
import toast from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'
import axios from 'axios'

function AddBook() {

    const context= useContext(GlobalContext)
    const [token] = context.auth.token

    
const[book,setBook]= useState({
    
        title:"",
        desc:"",
        price:0,
        author:"",
        category:"",
        pages:0,
        rentCost:0,
        numberofCopy:0,
        isbn:'' 
    
})

const[category,setCategory] = useState([])

const getCategory = useCallback(()=>{
        const readCategory = async ()=>{
              const res = await axios.get('/api/category/all',{
                    headers:{
                        Authorization: token
                    }
                })
                setCategory(res.data.Categories)
        }
        readCategory()
},[])


useEffect(()=>{
    getCategory()
},[])


const readvalue = (e)=>{
    const {name , value} = e.target
    setBook({...book , [name]:value})
}

const submitHandler = async (e)=>{
                e.preventDefault()
                try{
                    console.log('new book' , book)
                }   
                catch (err){
                console.log(err)
                }
}

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-center">Add New Book</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <form autoComplete='off' onSubmit={submitHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title"  value={book.title} onChange={readvalue} required className='form-control'/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" name="desc" id="desc"  value={book.desc}  cols='30' rows='5' onChange={readvalue} required className='form-control' ></textarea>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price"  value={book.price} onChange={readvalue} className='form-control' required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="author">Author</label>
                            <input type="text" name="author" id="author"  value={book.author} onChange={readvalue}  className='form-control'required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className='form-select' 
                            >
                                <option value='null'>Choose Category</option>
                                {
                                    category && category.map((item,index)=>{
                                        return(
                                            <optgroup key={index}>
                                                <option value={item.title}>{item.title}</option>
                                            </optgroup>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="pages">Pages</label>
                            <input type="number" name="pages" id="pages"  value={book.pages} onChange={readvalue} className='form-control'required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="rentCost">Rent Cost</label>
                            <input type="number" name="rentCost" id="rentCost"  value={book.rentCost} onChange={readvalue} className='form-control' required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="numberofCopy">Number of Copy</label>
                            <input type="number" name="numberofCopy" id="numberofCopy"  value={book.numberofCopy} onChange={readvalue} className='form-control' required/>
                        </div>
                        
                        <div className="form-group mt-2">
                            <label htmlFor="numberofCopy">ISBN Number</label>
                            <input type="number" name="isbn" id="isbn"  value={book.isbn} onChange={readvalue} className='form-control' required/>
                        </div>
                        <div className="from-group mt-2">
                            <input type="submit" value= 'Submit' className='btn btn-outline-success'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
