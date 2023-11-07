/** @format */

import React, { useState, useEffect } from "react";
import "../../styles/NavBar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [toggle, setToggle] = useState(false);

  const closeUlDropdown = () => {
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".navItem")) {
        setToggle(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className='navBarContainer'>
      <nav className='navigation'>
        <a href='/' className='brand-name'>
          <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/Logo.png' alt='Logo' />
        </a>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>

          <ul>
          <li className="navItem dropdown" onClick={() => setToggle((prev) => !prev)}>
            <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Services</Link>
              {toggle && (
                <div className='dropIn'>
                  <Link
                    className='nav-link dropInLinks hoverable-link'
                    to='/search-engine-optimization' onClick={closeUlDropdown}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/seoIcon.png' width='20' height='20' alt='making amor' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6>Search Engine Optimization</h6>
                      <p className='opacity-75'>Get Found Online</p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link dropInLinks hoverable-link'
                    to='/social-media-marketing' onClick={closeUlDropdown}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/smm.png' width='20' height='20' alt='serve' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6>Social Media Management</h6>
                      <p className='opacity-75'>
                        {" "}
                        Connect with your Audience
                      </p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link dropInLinks hoverable-link'
                    to='/email-marketing' onClick={closeUlDropdown}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/em.png' width='20' height='20' alt='email' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6>Email Marketing</h6>
                      <p className='opacity-75'>
                        Reach your Customers' Inboxes
                      </p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link dropInLinks hoverable-link'
                    to='/search-engine-marketing' onClick={closeUlDropdown}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/sem.png' width='20' height='20' alt='searching dell' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6>Search Engine Marketing</h6>
                      <p className='opacity-75'>Drive Traffic with Ads</p>
                    </div>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link className='nav-link' to='/about-us' onClick={closeUlDropdown}>
                About Us
              </Link>{" "}
            </li>
            <li>
              <Link className='nav-link' to='/portfolio-page' onClick={closeUlDropdown}>
                Portfolio
              </Link>{" "}
            </li>
            <li>
               <Link className="nav-link navtopbtn" to="/contact-us" onClick={closeUlDropdown}>
                Contact Us
              </Link> 
              
            </li>
          </ul>
          </div>
          </div>
      </nav>
    </div>
  );
}
