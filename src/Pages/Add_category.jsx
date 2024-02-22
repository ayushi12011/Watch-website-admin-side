import React from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from "react";

function Add_category() {

  const [formvalue, setformvalue] = useState({
    id: "",
    brands: "",
    product:""
 });

 const onChangeHandler = (e) => {
    setformvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });


 };
 const validation = () => {
  var result=true;
  if(formvalue.brands=="" || formvalue.brands==null)
  {
    result=false;
    toast.error('Brands field is required',
    {
      position:toast.POSITION.BOTTOM_RIGHT,
  });
    return false;
  }
  if(formvalue.product=="" || formvalue.product==null)
  {
    result=false;
    toast.error('Product field is required',
    {
      position:toast.POSITION.BOTTOM_RIGHT,
  });
    return false;
  }

    return result;
 };

 const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
       const res = await axios.post('http://localhost:3000/categories', formvalue);
       // console.log(res);
       if (res.status ==201) {
          toast.success('Category added succesfully')
          setformvalue({...formvalue,brands:"", product:""})
          
       }

    }

 };


  return (
    <div>
      <main id="main" className="main">
      <div classname="pagetitle">
          <h1>Add Category</h1>
          <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Category</li>
            <li class="breadcrumb-item active">Add_category</li>
            </ol>
        </nav>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-18">
              <div className="row">
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">Categories</h5>
                      <form className="row g-3">

                        <div class="col-12">
                          <label for="inputNanme4" class="form-label"> Brands </label>
                          <input type="text" class="form-control" name="brands" onChange={onChangeHandler} value={formvalue.brands} id="inputNanme4" placeholder="Add Brands Name"/></div>

                        <div class="col-12">
                          <label for="inputNanme4" class="form-label"> Products </label>
                          <input type="text" class="form-control" name="product" onChange={onChangeHandler} value={formvalue.product} id="inputNanme4" placeholder="Add Products Name"/></div>
                        
                        <div class="text-center">
                          <button type="submit" class="btn btn-primary my-4" onClick={onsubmit}> Submit </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Add_category;
