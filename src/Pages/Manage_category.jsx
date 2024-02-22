import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Manage_category() {
  const redirect = useNavigate();
  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/categories");
    setData(res.data);
  };

  const ondelete=async (id)=>{
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetchdata();
  }

  // const fetchdata =()=> {
  //   fetch("http://localhost:3000/categories")
  //   .then((response)=>response.json())
  //   .then((data)=> setData(data));
  // }

  return (
    <div>
      <main id="main" classname="main">
        <div classname="pagetitle">
          <h1>Manage Category</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Category</li>
              <li class="breadcrumb-item active">Manage_category</li>
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
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Brands</th>
                          <th scope="col">Product</th>
                          <th scope="col">Edit</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((value, index, entarr) => {
                          return (
                            <tr>
                              <th>{value.id}</th>
                              {/* <th><img src={value.image} height="150px" width="150px" alt="" /></th> */}
                              <td>{value.brands}</td>
                              <td>{value.product}</td>
                              <td>
                                <button type="button" class="btn btn-success" onClick={()=> redirect(`/edit_category/${value.id}`)}>
                                  Edit
                                </button>
                              </td>
                              <td>
                                <button type="button" class="btn btn-danger" onClick={()=>ondelete(value.id)}>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr>
                          <th scope="row">1</th>
                          <td>Rolex</td>
                          <td>Sport Watch</td>
                          <td>25,000</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Edit
                            </button>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <th scope="row">2</th>
                          <td>Titan</td>
                          <td>Casual Watch</td>
                          <td>10,000</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Edit
                            </button>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <th scope="row">3</th>
                          <td>Timex</td>
                          <td>Smart Watch</td>
                          <td>20,000</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Edit
                            </button>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <th scope="row">4</th>
                          <td>Rolex</td>
                          <td>Smart Watch</td>
                          <td>35,000</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Edit
                            </button>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <th scope="row">5</th>
                          <td>Timex</td>
                          <td>Casual Watch</td>
                          <td>15,000</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Edit
                            </button>
                          </td>
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
  );
}

export default Manage_category;
