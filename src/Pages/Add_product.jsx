import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import { useEffect } from 'react';

function Add_product() {

  const [data, setdata] = useState([]);
  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const res = await axios.get("http://localhost:3000/categories")
    setdata(res.data);
  };

  const [formvalue, setformvalue] = useState({
    id:"",
    img_link:"",
    pro_brands:"",
    pro_type:"",
    cate_name:"",
    pro_des:"",
    pro_price:"",
    pro_dis_price:""
  });

  const onChangeHandler = (e) => {
    setformvalue({...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
  }

  const validation = () => {
    var result=true;
    if(formvalue.img_link=="" || formvalue.img_link==null)
    {
      result=false;
      toast.error('Image field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }
    if(formvalue.pro_brands=="" || formvalue.pro_brands==null)
    {
      result=false;
      toast.error('Product brands field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }

    if(formvalue.pro_type=="" || formvalue.pro_type==null)
    {
      result=false;
      toast.error('Product field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }

    if(formvalue.pro_des=="" || formvalue.pro_des==null)
    {
      result=false;
      toast.error('Product Description field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }

    if(formvalue.pro_price=="" || formvalue.pro_price==null)
    {
      result=false;
      toast.error('Price field is required',
      {
        position:toast.POSITION.BOTTOM_RIGHT,
    });
      return false;
    }

    if(formvalue.pro_dis_price=="" || formvalue.pro_dis_price==null)
    {
      result=false;
      toast.error('Disscounted Price field is required',
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
      const res = await axios.post("http://localhost:3000/product", formvalue);
      if (res.status == 201) {
        toast.success("Product added successfully");
        setformvalue({ ...formvalue, img_link:"", pro_brands:"", pro_type:"", cate_name:"", pro_des:"", pro_price:"", pro_dis_price:"" });

      }
    }
  };


  return (
    <div>
      <main id="main" className="main">
      <div classname="pagetitle">
          <h1>Add Product</h1>
          <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Category</li>
            <li class="breadcrumb-item active">Add_product</li>
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
                          <label for="inputNanme4" class="form-label"> Image</label>
                          <input type="text" value={formvalue.img_link} onChange={onChangeHandler} name="img_link"class="form-control" id="inputNanme4" placeholder="Add Image"/>
                        </div>

                        <div class="col-12">
                          <label for="inputNanme4" class="form-label"> Brands</label>
                          <select class="form-select" value={formvalue.pro_brands} onChange={onChangeHandler} name="pro_brands" aria-label="Default select example">
                            <option> {" "} Select Brands{" "}</option>

                            {
                              data.map((value, index) => (
                                  <option key={index} value={value.brands}>{value.brands}</option>
                              ))
                            }
                            {/* <option value="1">Timex</option>
                            <option value="2">Rolex</option>
                            <option value="3">Titan</option> */}
                          </select>
                        </div>

                        <div class="col-12">
                          <label for="inputNanme4" class="form-label"> Products</label>
                          <select class="form-select" value={formvalue.pro_type} onChange={onChangeHandler} name="pro_type" aria-label="Default select example">
                            <option> {" "} Select Product{" "}</option>

                            {
                              data.map((value, index) => (
                                  <option key={index} value={value.product}>{value.product}</option>
                              ))
                            }
                            {/* <option value="1">Casual Watch</option>
                            <option value="2">Sport Watch</option>
                            <option value="3">Smart Watch</option> */}
                          </select>
                        </div>

                        <div class="col-12">
                          <label for="inputNanme4" class="form-label">Category</label>
                          <select class="form-select" value={formvalue.cate_name} onChange={onChangeHandler} name="cate_name" aria-label="Default select example">
                            <option> {" "} Select Category{" "}</option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kid's</option>
                          </select>
                        </div>

                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Product Description</label>
                          <input type="text" class="form-control" value={formvalue.pro_des} onChange={onChangeHandler} name="pro_des" id="inputAddress" placeholder="Product Description"/>
                        </div>


                        <div class="col-12">
                          <label for="inputAddress" class="form-label"> Price</label>
                          <input type="text" class="form-control" value={formvalue.pro_price} onChange={onChangeHandler} name="pro_price" id="inputAddress" placeholder="Price"/>
                        </div>

                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Disscounted Price</label>
                          <input type="text" class="form-control" value={formvalue.pro_dis_price} onChange={onChangeHandler} name="pro_dis_price" id="inputAddress" placeholder="Disscounted Price"/>
                        </div>


                        <div class="text-center">
                          <button type="submit" class="btn btn-primary" onClick={onsubmit}> Submit</button>
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
  )
}

export default Add_product