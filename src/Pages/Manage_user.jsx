import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Manage_user() {
  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("  http://localhost:3000/user");
    setData(res.data);
  };

  const ondelete=async (id)=>{
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetchdata();
  }

  // const fetchdata =()=> {
  //   fetch("  http://localhost:3000/user")
  //   .then((response)=>response.json())
  //   .then((data)=> setData(data));
  // }

  return (
    <div>
      <div>
        <main id="main" classname="main">
          <div classname="pagetitle">
            <h1>Manage User</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NavLink to="/index">Home</NavLink></li>
                <li class="breadcrumb-item">Product</li>
                <li class="breadcrumb-item active">Manage_user</li>
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
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.map((value, index, entarr) => {
                          return (
                            <tr>
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>{value.contact}</td>
                              <td>{value.address}</td>
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
                            <td>Ayushi</td>
                            <td>Thakkar</td>
                            <td>2365987</td>
                            <td>Ah`bad</td>
                            <td>ayushithakkar@gmail.com</td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr> */}
                          {/* <tr>
                            <th scope="row">3</th>
                            <td>Khushi</td>
                            <td>Panchal</td>
                            <td>36987466</td>
                            <td>Ah`bad</td>
                            <td>khushipanchal@gmail.com</td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr> */}
                          {/* <tr>
                            <th scope="row">4</th>
                            <td>Nancy</td>
                            <td>Thakkar</td>
                            <td>2369871</td>
                            <td>Ah`bad</td>
                            <td>nancythakkar@gmail.com</td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                          </tr> */}
                          {/* <tr>
                            <th scope="row">5</th>
                            <td>abc</td>
                            <td>xyz</td>
                            <td>2369897441</td>
                            <td>Ah`bad</td>
                            <td>abc@gmail.com</td>
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

export default Manage_user