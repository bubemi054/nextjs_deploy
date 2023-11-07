'use client'

// import HeroBg from "../../components/organism/hero-bg";
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MyMap from "../../components/layouts/MyMap";

export default function Contact() {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (value === "") {
        setError(null);
      } else {
        setError(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    const apiUrl = "https://api.amorservtech.net/api/v1/consulting/contacts";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          message: "",
        });
        // navigate("/thank-you");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>

      {/* <HeroBg
        title={"Contact Information".toUpperCase()}
        desc='Our digital marketing experts are always available to give
        you top-notch solutions to your marketing challenges.'
        link='/contact-us'
        img='https://amoserv.s3.amazonaws.com/amorservconsulting/contact.png'
      /> */}

      <section className='py-5 bg-light'>
        <div className='container-lg my-2'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='rounded-4 contacts p-5'>
                <h4 className='py-3' style={{ fontSize: "3rem" }}>
                  How can we help?
                </h4>

                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <input
                      type='text'
                      name='full_name'
                      className='contro'
                      placeholder='Full Name'
                      value={formData.full_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='tel'
                      name='phone'
                      className='contro'
                      placeholder='Phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='email'
                      name='email'
                      className='contro'
                      placeholder='Work Email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <textarea
                      name='message'
                      className='form-control'
                      placeholder='Message'
                      rows='13'
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className='svgicon'>
                    <button
                      type='submit'
                      className='text-decoration-none text-dark'
                      style={{
                        background: "none",
                        border: "none",
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='63'
                        height='65'
                        viewBox='0 0 63 65'
                        fill='none'
                      >
                        <path
                          d='M24.0268 37.1543L24.0432 37.2321L28.5649 58.6777L31.9904 59.9605L60.7947 18.8452L24.0268 37.1543ZM24.0268 37.1543L23.9684 37.1002M24.0268 37.1543L23.9684 37.1002M23.9684 37.1002L9.46662 23.6808L10.783 20.1657L59.1377 15.8402L23.9684 37.1002ZM60.9112 16.7849C60.736 16.4706 60.4763 16.2155 60.1627 16.0485C59.8491 15.8815 59.494 15.8092 59.1382 15.8401L60.9112 16.7849ZM60.9112 16.7849C61.085 17.1001 61.1669 17.4611 61.1465 17.8261C61.1261 18.1911 61.0042 18.5444 60.7951 18.8447L60.9112 16.7849ZM30.8975 55.8074L31.0164 56.3711L31.3469 55.8993L56.933 19.3762L57.2415 18.9358L56.706 18.9837L13.4804 22.851L12.9197 22.9011L13.3329 23.2835L25.3912 34.4419L25.5208 34.5619L25.6772 34.4797L46.4136 23.5876L47.6987 26.1729L27.115 36.9853L26.9476 37.0732L26.9866 37.2582L30.8975 55.8074Z'
                          fill='#555555'
                          stroke='#555555'
                          stroke-width='0.5'
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='d-flex align-items-center  px-4 py-4 mt-5 text-dark bg-white rounded  cons'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='44'
                  viewBox='0 0 28 44'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M21.971 2.7125H5.84872C5.13607 2.7125 4.4526 2.99828 3.94868 3.50697C3.44476 4.01567 3.16166 4.7056 3.16166 5.425V37.975C3.16166 38.6944 3.44476 39.3843 3.94868 39.893C4.4526 40.4017 5.13607 40.6875 5.84872 40.6875H21.971C22.6837 40.6875 23.3672 40.4017 23.8711 39.893C24.375 39.3843 24.6581 38.6944 24.6581 37.975V5.425C24.6581 4.7056 24.375 4.01567 23.8711 3.50697C23.3672 2.99828 22.6837 2.7125 21.971 2.7125ZM5.84872 0C4.42342 0 3.05649 0.571561 2.04865 1.58895C1.04081 2.60633 0.474609 3.9862 0.474609 5.425V37.975C0.474609 39.4138 1.04081 40.7937 2.04865 41.8111C3.05649 42.8284 4.42342 43.4 5.84872 43.4H21.971C23.3963 43.4 24.7633 42.8284 25.7711 41.8111C26.779 40.7937 27.3452 39.4138 27.3452 37.975V5.425C27.3452 3.9862 26.779 2.60633 25.7711 1.58895C24.7633 0.571561 23.3963 0 21.971 0L5.84872 0Z'
                    fill='#555555'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.9097 37.975C14.6224 37.975 15.3058 37.6893 15.8097 37.1806C16.3137 36.6719 16.5968 35.9819 16.5968 35.2625C16.5968 34.5431 16.3137 33.8532 15.8097 33.3445C15.3058 32.8358 14.6224 32.55 13.9097 32.55C13.1971 32.55 12.5136 32.8358 12.0097 33.3445C11.5058 33.8532 11.2227 34.5431 11.2227 35.2625C11.2227 35.9819 11.5058 36.6719 12.0097 37.1806C12.5136 37.6893 13.1971 37.975 13.9097 37.975Z'
                    fill='#555555'
                  />
                </svg>
                <div className='lh-1' style={{ marginLeft: "20px" }}>
                  <h1 className='h6 mb-3 text-dark lh-1'>Phone Number</h1>
                  <small>
                    <Link
                      to='tel:+1 (866) 236-3090'
                      className='text-decoration-none text-dark'
                    >
                      +1 (866) 236-3090,{" "}
                    </Link>
                  </small>
                  <small>
                    <Link
                      to='tel:+1 (866) 236-3090'
                      className='text-decoration-none text-dark'
                    >
                      +1 (866) 236-3090
                    </Link>
                  </small>
                </div>
              </div>{" "}
              <br /> <br />
              <div className='d-flex align-items-center px-4 py-4 my-3 text-dark bg-white rounded cons'>
                {/* <FontAwesomeIcon icon={faEnvelope} className='me-5 fa-2xl' /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='35'
                  viewBox='0 0 48 35'
                  fill='none'
                >
                  <path
                    d='M43.8116 0H3.90377C3.02176 0 2.17587 0.358576 1.55219 0.996847C0.928505 1.63512 0.578125 2.5008 0.578125 3.40345V30.631C0.578125 31.5337 0.928505 32.3994 1.55219 33.0376C2.17587 33.6759 3.02176 34.0345 3.90377 34.0345H43.8116C44.6936 34.0345 45.5395 33.6759 46.1632 33.0376C46.7868 32.3994 47.1372 31.5337 47.1372 30.631V3.40345C47.1372 2.5008 46.7868 1.63512 46.1632 0.996847C45.5395 0.358576 44.6936 0 43.8116 0ZM40.1534 3.40345L23.8577 14.9411L7.56199 3.40345H40.1534ZM3.90377 30.631V4.95202L22.9099 18.4127C23.1882 18.6103 23.5189 18.7162 23.8577 18.7162C24.1964 18.7162 24.5271 18.6103 24.8055 18.4127L43.8116 4.95202V30.631H3.90377Z'
                    fill='#555555'
                  />
                </svg>
                <div className='lh-1' style={{ marginLeft: "20px" }}>
                  <h1 className='h6 mb-3 text-dark lh-1'>Email Address</h1>
                  <small>
                    <Link
                      to='mailto:info@amorservconsulting.com'
                      className='text-decoration-none text-dark'
                    >
                      info@amorservconsulting.com
                    </Link>
                  </small>
                </div>
              </div>
              <br /> <br />
              <div className='d-flex align-items-center px-4 py-4 my-3 text-dark bg-white rounded cons'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='34'
                  height='45'
                  viewBox='0 0 34 45'
                  fill='none'
                >
                  <path
                    d='M16.847 10.4365C15.6574 10.4365 14.4944 10.7926 13.5053 11.4598C12.5161 12.127 11.7452 13.0753 11.2899 14.1848C10.8346 15.2943 10.7155 16.5152 10.9476 17.6931C11.1797 18.8709 11.7526 19.9528 12.5938 20.802C13.435 21.6512 14.5068 22.2295 15.6736 22.4638C16.8404 22.6981 18.0498 22.5778 19.1489 22.1182C20.248 21.6587 21.1874 20.8804 21.8483 19.8819C22.5093 18.8834 22.862 17.7094 22.862 16.5085C22.8602 14.8987 22.2259 13.3553 21.0983 12.217C19.9706 11.0787 18.4418 10.4384 16.847 10.4365ZM16.847 19.5445C16.2522 19.5445 15.6707 19.3664 15.1762 19.0328C14.6816 18.6992 14.2961 18.2251 14.0685 17.6703C13.8408 17.1155 13.7813 16.5051 13.8973 15.9162C14.0134 15.3273 14.2998 14.7863 14.7204 14.3617C15.141 13.9371 15.6769 13.648 16.2603 13.5308C16.8437 13.4137 17.4484 13.4738 17.998 13.7036C18.5475 13.9334 19.0172 14.3225 19.3477 14.8218C19.6781 15.321 19.8545 15.908 19.8545 16.5085C19.8536 17.3134 19.5365 18.0851 18.9726 18.6542C18.4088 19.2234 17.6444 19.5435 16.847 19.5445Z'
                    fill='#555555'
                  />
                  <path
                    d='M28.4048 4.83149C25.547 1.94735 21.7322 0.234053 17.6966 0.0222685C13.661 -0.189516 9.69072 1.11522 6.55206 3.68467C3.41339 6.25412 1.32883 9.90613 0.700682 13.9359C0.0725373 17.9656 0.945343 22.0873 3.15065 25.5056L14.514 43.1156C14.7669 43.5074 15.1126 43.8294 15.5199 44.0522C15.9272 44.2751 16.3832 44.3918 16.8465 44.3918C17.3097 44.3918 17.7657 44.2751 18.173 44.0522C18.5803 43.8294 18.9261 43.5074 19.1789 43.1156L30.5427 25.5056C32.5889 22.3347 33.4932 18.55 33.104 14.786C32.7148 11.022 31.0557 7.5075 28.4048 4.83149ZM28.0228 23.8485L16.8465 41.1678L5.67018 23.8485C2.24915 18.547 2.98289 11.4523 7.41481 6.97821C8.65339 5.72787 10.1238 4.73604 11.7421 4.05936C13.3604 3.38268 15.0949 3.0344 16.8465 3.0344C18.5982 3.0344 20.3326 3.38268 21.9509 4.05936C23.5692 4.73604 25.0396 5.72787 26.2782 6.97821C30.7101 11.4523 31.4438 18.547 28.0228 23.8485Z'
                    fill='#555555'
                  />
                </svg>
                <div className='lh-1' style={{ marginLeft: "20px" }}>
                  <h1 className='h6 mb-3 text-dark lh-1'>Location</h1>
                  <small>
                    <Link to='' className='text-decoration-none text-dark'>
                      2340 West Touhy Avenue, Suite B, Chicago, Illinois 60645.
                    </Link>
                  </small>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        <MyMap />
    
      </section>
    </>
  );
}
