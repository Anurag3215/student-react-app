import React from 'react'
import Navigation from './Navigation'

const ViewStudent = () => {
  return (
    <div>
    <Navigation />

    <div className="container mt-4">
        <div className="row g-4">

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        className="card-img-top"
                        alt="Student"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Arjun Nair</h5>
                        <p className="card-text">
                            Admission No: ST001 <br />
                            Class: X <br />
                            Section: A <br />
                            Gender: Male <br />
                            Contact: 9876543210 <br />
                            Email: arjun@gmail.com <br />
                            Parent: Rajesh Nair
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://randomuser.me/api/portraits/women/11.jpg"
                        className="card-img-top"
                        alt="Student"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Ananya Menon</h5>
                        <p className="card-text">
                            Admission No: ST002 <br />
                            Class: IX <br />
                            Section: B <br />
                            Gender: Female <br />
                            Contact: 9876501234 <br />
                            Email: ananya@gmail.com <br />
                            Parent: Suresh Menon
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://randomuser.me/api/portraits/men/12.jpg"
                        className="card-img-top"
                        alt="Student"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Rahul Krishna</h5>
                        <p className="card-text">
                            Admission No: ST003 <br />
                            Class: VIII <br />
                            Section: C <br />
                            Gender: Male <br />
                            Contact: 9123456789 <br />
                            Email: rahul@gmail.com <br />
                            Parent: Vinod Krishna
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://randomuser.me/api/portraits/women/13.jpg"
                        className="card-img-top"
                        alt="Student"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Meera Joseph</h5>
                        <p className="card-text">
                            Admission No: ST004 <br />
                            Class: X <br />
                            Section: D <br />
                            Gender: Female <br />
                            Contact: 9988776655 <br />
                            Email: meera@gmail.com <br />
                            Parent: Joseph Mathew
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default ViewStudent