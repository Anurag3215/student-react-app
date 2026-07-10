import React, { useState } from 'react'
import Navigation from './Navigation'

const ViewStudent = () => {

    const [data, changeData] = useState(
        [
            { "avatar": "https://randomuser.me/api/portraits/men/10.jpg", "name": "Arjun Nair", "admno": "ST001", "class": "X", "gender": "Male", "contact": "9876543210", "email": "arjun@gmail.com", "parent": "Rajesh Nair" },
            { "avatar": "https://randomuser.me/api/portraits/women/11.jpg", "name": "Ananya Menon", "admno": "ST002", "class": "iX", "gender": "Female", "contact": "9876501234", "email": "ananya@gmail.com", "parent": "Suresh Menon" },
            { "avatar": "https://randomuser.me/api/portraits/men/12.jpg", "name": "Rahul Krish", "admno": "ST003", "class": "viii", "gender": "Male", "contact": "9123456789", "email": "rahul@gmail.com", "parent": "Vinod Krishna" },
            { "avatar": "https://randomuser.me/api/portraits/women/13.jpg", "name": "Meera Joseph", "admno": "ST004", "class": "X", "gender": "Female", "contact": "9988776655", "email": "meera@gmail.com", "parent": "Joseph Mathew" },


        ]
    )

    return (
        <div>
            <Navigation />

            <div className="container mt-4">
                <div className="row g-4">


                    {data.map(
                        (value, index) => {
                            return (

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card h-100">
                                        <img
                                            src={value.avatar}
                                            className="card-img-top"
                                            alt="Student"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <p className="card-text">{value.admno}</p> <br />
                                            <p className="card-text">{value.class}</p> <br/>
                                            <p className="card-text">{value.gender}</p> <br />
                                            <p className="card-text">{value.contact}</p><br />
                                            <p className="card-text">{value.email}</p><br />
                                            <p className="card-text">{value.parent}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    )}


                </div>
            </div>
        </div>
    )
}

export default ViewStudent