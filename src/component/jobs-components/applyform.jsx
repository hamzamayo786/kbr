import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";



function JoinTalentCommunity() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        areaOfInterest: '',
        city: '',
        country: '',
        state: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Your Application is Successfully Submit")

       Navigate('/careers');
        
    };

    return (

        <div className="container mt-5 pt-5">
            <h2 className='mt-5 pt-5 txt-primary text-center'>Job Application</h2>
            <form onSubmit={handleSubmit} className='apply-form'>

                <div className="mb-4 mt-4">
                    <label htmlFor="resumeUpload" className="btn btn-primary">
                        Upload Resume
                    </label>
                    <input
                        type="file"
                        id="resumeUpload"
                        style={{ display: 'none' }}
                        onChange={handleResumeUpload}
                        accept=".pdf,.doc,.docx"
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>First Name *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First Name*"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Last Name *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last Name*"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Email *</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email*"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Phone *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Phone Number*"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Area of Interest *</label>
                        <select
                            className="form-control"
                            name="areaOfInterest"
                            required
                            onChange={handleChange}
                        >
                            <option value="">Area of Interest</option>
                            <option value="">Website Development </option>
                            <option value=""> Social media Marketing </option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>City *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Country *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="country"
                            placeholder="Country"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>State *</label>
                        <input
                            type="text"
                            className="form-control"
                            name="state"
                            placeholder="State"
                            onChange={handleChange}
                        />
                    </div>

                    <div className=" mb-3">
                        <input type="checkbox" className=" d-inline-block   "
                            name="state"
                            placeholder="State"
                            onChange={handleChange} />
                        <label className=" d-inline-block px-2 "> *By checking this box, I consent to receive recruiting related email messages regarding employment opportunities.</label><br />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Submit Application
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default JoinTalentCommunity;
