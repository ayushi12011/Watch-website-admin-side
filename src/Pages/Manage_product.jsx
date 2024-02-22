import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Manage_product() {
const redirect = useNavigate();
  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/product");
    setData(res.data);
  };

  const ondelete=async (id)=>{
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    fetchdata();
  }

  // const fetchdata =()=> {
  //   fetch("http://localhost:3000/product")
  //   .then((response)=>response.json())
  //   .then((data)=> setData(data));
  // }
  return (
    <div>
      <div>
        <main id="main" classname="main">
          <div classname="pagetitle">
            <h1>Manage Product</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NavLink to="/index">Home</NavLink></li>
                <li class="breadcrumb-item">Product</li>
                <li class="breadcrumb-item active">Manage_product</li>
              </ol>
            </nav>
          </div>
          <section classname="section">
            <div classname="row">
              <div classname="col-lg-12">
                <div classname="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* Table with stripped rows */}
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Brands</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Disscounted</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.map((value, index, entarr) => {
                          return (
                            <tr>
                              <th>{value.id}</th>
                              <th><img src={value.img_link} height="150px" width="150px" alt="" /></th>
                              <td>{value.pro_brands}</td>
                              <td>{value.pro_type}</td>
                              <td>{value.cate_name}</td>
                              <td>{value.pro_des}</td>
                              <td>{value.pro_price}</td>
                              <td>{value.pro_dis_price}</td>
                              <td>
                                <button type="button" class="btn btn-success" onClick={()=> redirect(`/edit_product/${value.id}`)}>
                                  Edit
                                </button>
                              </td>
                              <td>
                                <button type="button" class="btn btn-danger"  onClick={()=>ondelete(value.id)}>
                                  Delete
                                </button>
                              </td>
                            </tr>  
                          );
                        })}
                          {/* <tr>
                            <th scope="row">2</th>
                            <td>Titan</td>
                            <td>Casual Watch</td>
                            <td>10,000</td>
                            <td><button type="button" class="btn btn-success">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Timex</td>
                            <td>Smart Watch</td>
                            <td>20,000</td>
                            <td><button type="button" class="btn btn-success">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Rolex</td>
                            <td>Smart Watch</td>
                            <td>35,000</td>
                            <td><button type="button" class="btn btn-success">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Timex</td>
                            <td>Casual Watch</td>
                            <td>15,000</td>
                            <td><button type="button" class="btn btn-success">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr> */}
                        </tbody>
                      </table>
                      {/* End Table with stripped rows */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>
        {"{"}/* End #main */{"}"}
  </div>
</div>
  )
}

export default Manage_product