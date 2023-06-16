import React, { useCallback, useContext, useEffect, useState  } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../../GlobalContext';
import { toast } from 'react-toastify';

function UpdateCategory() {
  const [category, setCategory] = useState({
    title: '',
    desc: '',
  });

  const context = useContext(GlobalContext);
  const [token]   = context.auth.token;
  const navigate = useNavigate();

  const params = useParams()

  const getCategory = useCallback(()=>{
        const readCategory = async()=>{
            const res = await axios.get(`/api/category/single/${params.id}`,{
                headers:{
                    Authorization:token
                }
            })
            setCategory(res.data.extcat)
        }
        readCategory()
  },[])

  useEffect(()=>{
    getCategory()
  },[])


  const readValue = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/category/update/${params.id}`, category, {
        headers: {
          Authorization: token,
        },
      });

      toast.success('Category updated successfully');
      navigate('/admin/category/list');
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Update Category</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={category.title}
                    className="form-control"
                    required
                    onChange={readValue}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    name="desc"
                    id="desc"
                    cols="30"
                    value={category.desc}
                    rows="5"
                    className="form-control"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="from-group mt-2">
                  <input
                    type="submit"
                    value="Update Category"
                    className="btn btn-outline-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCategory;
