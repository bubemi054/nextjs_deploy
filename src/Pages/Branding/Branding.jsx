import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Branding() {
  return (
    <>
      <Helmet>
        <title>Branding - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting Branding Page' />
      </Helmet>
      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Ignite Your Brand's Essence through Expert Branding</h1>
            <p className='rapp'>
              Crafting Authentic, Memorable Brands for Lasting Impressions{" "}
              <br /> and Business Growth.
            </p>
            <Link to=''>
              <button>Schedule a Call</button>
            </Link>
          </div>
          <div className=''>
            <img
              src='https://amoserv.s3.amazonaws.com/amorservconsulting/braimage.png'
              className='img-fluid'
              alt='header'
              
            />
          </div>
        </div>
      </header>

      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>
              Discover Our Comprehensive Branding Services
            </h3>
            <p>
              From Identity to Storytelling, Our Branding Services Shape
              Remarkable Business Journeys.
            </p>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Brand Guidelines Creation{" "}
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Visual Branding
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Brand Strategy
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Brand Identity Development
              </Link>
            </button>

            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Marketing Collateral Design{" "}
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <Link to='' className='px-2 serv-link'>
                Logo Design{" "}
              </Link>
            </button>
          </div>
        </div>
      </section>

      <div class='container'>
        <div class='row'>
          <div class='col-md-6'>
            <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/braimage.png' class='img-fluid' alt='header' />
          </div>
          <div class='col-md-6'>
            <ul>
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
