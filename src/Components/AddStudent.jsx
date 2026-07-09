import React from 'react'
import Navigation from './Navigation'

const AddStudent = () => {
  return (
   <div>
  <Navigation />
  <h1 className="text-center">ADD STUDENT</h1>

  <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row">

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Admission Number</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Gender</label>
            <select className="form-control">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Class/Grade</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Section</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Parent/Guardian</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Contact</label>
            <input type="tel" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label className="form-label">Address</label>
            <textarea className="form-control"></textarea>
          </div>

          <div className="col col-12 text-center">
            <button className="btn btn-primary mt-3">Add</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default AddStudent