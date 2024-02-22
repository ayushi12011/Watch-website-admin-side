import React from 'react'

function Add_blog() {
  return (
    <div>
        <main id="main" className="main">
      <div classname="pagetitle">
          <h1>Add Blog</h1>
          <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Blog</li>
            <li class="breadcrumb-item active">Add_Blog</li>
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
                      <h5 className="card-title">Blog</h5>
                      <form className="row g-3">
                        <div class="col-12">
                          <label for="inputNanme4" class="form-label">
                            Id
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputNanme4"
                            placeholder="Id"
                          />
                        </div>
                        <div class="col-12">
                          <label for="inputNanme4" class="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputNanme4"
                            placeholder="Add title"
                          />
                        </div>
                        <div class="col-12">
                          <label for="inputNanme4" class="form-label">
                            Discription
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputNanme4"
                            placeholder="Add Discription"
                          />
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">
                            Image
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="inputAddress"
                            placeholder='Add image'
                          />
                        </div>
                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
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

export default Add_blog