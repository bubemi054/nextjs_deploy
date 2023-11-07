/** @format */

import React, { useState } from "react";
import axios from "axios";
import emailValidator from "email-validator";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const blockedDomains = ["gmail.com", "yahoo.com"];

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    position: "",
    company_name: "",
    email: "",
    phone: "",
    user_website: "",
    message: "",
    website_id: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return (
      emailValidator.validate(email) &&
      !blockedDomains.includes(email.split("@")[1])
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (value === "") {
        setError(null); // Clear the error if the email field is empty
      } else if (!isValidEmail(value)) {
        setError("Business email or a corporate email address");
      } else {
        setError(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      // If there is an error, prevent form submission
      return;
    }

    const apiUrl = "https://api.amorservtech.net/api/v1/consulting/contacts";

    setLoading(true);
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          full_name: "",
          position: "",
          company_name: "",
          email: "",
          phone: "",
          user_website: "",
          message: "",
          website_id: 1,
        });
        setLoading(false);
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className='container d-flex justify-content-center align-items-center pt-5'>
      <div
        className='form-container'
        style={{ width: "62.5625rem", borderRadius: "0.5rem" }}
      >
        <div className='row forminput'>
          <div className='col-md-6'>
            {/* {showAlert && (
              <div className='fade-out-alert'>Thanks for contacting us!</div>
            )} */}
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  id='name'
                  name='full_name'
                  value={formData.full_name}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Your Full Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='company_name'
                  name='company_name'
                  value={formData.company_name}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Company Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Phone Number'
                />
              </div>
            </form>
          </div>

          <div className='col-md-6'>
            <form onSubmit={handleSubmit}>
              <div className='form-group' style={{ position: "relative" }}>
                {error && (
                  <div
                    className='error-badge'
                    style={{
                      position: "absolute",
                      top: "-1.5rem", // Adjust the distance from the top as needed
                      left: 0,
                      // backgroundColor: 'red',
                      color: "red",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.2rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {error}
                  </div>
                )}
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${error ? "error-input" : ""}`}
                  required
                  placeholder='Work Email'
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  id='position'
                  name='position'
                  value={formData.position}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Position'
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  id='user_website'
                  name='user_website'
                  value={formData.user_website}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Your Website'
                />
              </div>
            </form>
          </div>

          <div className='col-md-12'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='form-control'
                  rows='6'
                  required
                  placeholder='Message'
                ></textarea>
              </div>

              {/* Include a hidden input for website_id */}
              <input
                type='hidden'
                name='website_id'
                value={formData.website_id}
              />

              <div className='text-center'>
                <button
                  style={{ textAlign: "center" }}
                  className='btn-real'
                  type='submit'
                  disabled={loading}
                >
                  {loading && <Spinner />}{" "}
                  {loading ? "Submitting..." : "Get Started"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
