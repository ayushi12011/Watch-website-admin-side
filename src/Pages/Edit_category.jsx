import { redirect, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_category() {

   const { id } = useParams();
   const redirect = useNavigate()

   const [formvalue, setformvalue] = useState({
    brands: "",
    product:""
   });

   useEffect(() => {
      fetchData()
   }, [])
   const fetchData=async()=>{
      const res=await axios.get(`http://localhost:3000/categories/${id}`)
      setformvalue(res.data)
    }
   
   const onChangeHandler   = (e) => {
      setformvalue({ ...formvalue,  [e.target.name]: e.target.value });


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
         const res = await axios.patch(`http://localhost:3000/categories/${id}`, formvalue);
         // console.log(res);
         if (res.status == 200) {
            toast.success('Category edited succesfully');
            setformvalue({ ...formvalue, brands:"", product:""});
            return redirect("/manage_category")

         }

      }

   };
   return (
      <div>
        <main id="main" className="main">
      <div classname="pagetitle">
          <h1>Edit Category</h1>
          <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Category</li>
            <li class="breadcrumb-item active">Edit_category</li>
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
                          <button type="submit" class="btn btn-primary my-4" onClick={onsubmit}> Save </button>
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

export default Edit_category;