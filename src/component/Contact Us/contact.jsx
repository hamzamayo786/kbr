import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { countries } from 'countries-list';
import '../../assets/css/contact.css';
import Banner2 from '../../layout/banner2';

const ContactForm = () => {
    const countryNames = Object.values(countries).map(country => country.name);

    const [formData, setFormData] = useState({
        reason: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        message: '',
        recaptchaValue: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic goes here
        console.log(formData);
    };

    const handleRecaptcha = (value) => {
        setFormData(prevState => ({
            ...prevState,
            recaptchaValue: value
        }));
    };


    return (
        <>
            <Banner2 heading="Contact US" />
            <form className="contact-form mt-5 mb-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Reason for contacting *</label>
                    <select name="reason" className="form-control" required onChange={handleChange}>
                        <option value="">- Select -</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        {/* Add other reasons */}
                    </select>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-6">
                        <label>First Name *</label>
                        <input type="text" name="firstName" className="form-control" required onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name *</label>
                        <input type="text" name="lastName" className="form-control" required onChange={handleChange} />
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-6">
                        <label>Your Email *</label>
                        <input type="email" name="email" className="form-control" required onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" name="company" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <select name="country" required>
                        <option value="">Select a country</option>
                        {countryNames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" className="form-control" required onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <p>Please Note: Job applications are only accepted through our careers page.</p>
                    <ReCAPTCHA
                        sitekey="Your_ReCAPTCHA_Site_Key" // Replace with your actual site key
                        onChange={handleRecaptcha}
                        className="recaptcha-container"
                    />
                </div>
                <button type="submit" className="btn ">Submit</button>
            </form>
        </>
    );
};

export default ContactForm;
