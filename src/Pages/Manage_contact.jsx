import React, { useState, useEffect } from "react";
import axios from 'axios'

function Manage_contact() {

  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/contact");
    setData(res.data);
  };

  const ondelete=async (id)=>{
    const res = await axios.delete(`http://localhost:3000/contact/${id}`);
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
          <h1>Manage Contact</h1>
          <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Contact</li>
            <li class="breadcrumb-item active">Manage_contact</li>
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
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map((value, index, entarr) => {
                          return (
                            <tr>
                              <th>{value.id}</th>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>
                                <button type="button" class="btn btn-success">
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
                        <th scope="row">2</th>
                        <td>Ayushi</td>
                        <td>ayushithakkar@gmail.com</td>
                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                      </tr> */}
                      {/* <tr>
                        <th scope="row">3</th>
                        <td>Khushi</td>
                        <td>khushipanchal@gmail.com</td>
                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>xyz</td>
                        <td>xyz@gmail.com</td>
                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>abc</td>
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

    </div>
  )
}

export default Manage_contact