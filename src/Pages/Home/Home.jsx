"use client"
import React from "react";
// import { Helmet } from "react-helmet";
import HeroBg from "../../components/organism/hero-bg";
import SectionLogo from "../../components/layouts/SectionLogo";
import { Slide } from "react-slideshow-image";
// import { Link } from "react-router-dom";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import jsPDF from "jspdf";
import CarouselCard from "../../components/layouts/CarouselCard";
// import ContactForm from "../../components/layouts/ContactForm";

export default function Home() {
  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello, this is your PDF!", 10, 10); // Add your content here
    doc.save("downloaded-file.pdf");
  };

  return (
    <>
      {" "}
     
      {/* <Helmet>
        <title>Home - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting Home Page' />
      </Helmet> */}
      <HeroBg
        title={"We're your Partner for Digital Marketing Success".toUpperCase()}
        desc='Empower Your Brand, and Drive Results with AmorServ Consulting'
        link=''
        linkTitle='Start Today'
        img='https://amoserv.s3.amazonaws.com/amorservconsulting/homeimg.png'
      />
      <section id='sec-2' className='py-5'>
        <div className='container-lg my-4'>
          <div className='row mb-2'>
            <div className='col-12 text-center'>
              <h3 className='mb-4' style={{ fontSize: "3rem" }}>
                Some of our Clients
              </h3>
            </div>
          </div>
        </div>

        <div className='client-wrapper'>
          <div className='client-carousel'>
            <div className='sliding'>
              <Slide
                canSwipe={true}
                infinite={true}
                duration={2000}
                autoplay={true}
                arrows={false}
                cssClass='slide-show'
                defaultIndex={1}
                responsive={[
                  {
                    breakpoint: 900,

                    settings: {
                      slidesToShow: 5,

                      slidesToScroll: 2,
                    },
                  },

                  {
                    breakpoint: 700,

                    settings: {
                      slidesToShow: 4,

                      slidesToScroll: 1,
                    },
                  },

                  {
                    breakpoint: 500,

                    settings: {
                      slidesToShow: 3,

                      slidesToScroll: 1,
                    },
                  },

                  {
                    breakpoint: 300,

                    settings: {
                      slidesToShow: 2,

                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/nike.png' alt="nike" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cola.png' alt="cola" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/amzon.png' alt="amazon"/>

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cvs.png' alt="cvs" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cisco.png' alt="cisco" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/pp.png' alt="pp" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/mascard.png' alt="master" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/nike.png' alt="nike" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cola.png' alt="cola" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/amzon.png' alt="amazon"/>

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cvs.png' alt="cvs" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/cisco.png' alt="cisco" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/pp.png' alt="pp" />

                <SectionLogo img='https://amoserv.s3.amazonaws.com/amorservconsulting/mascard.png' alt="master" />

              </Slide>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-3' className='py-4'>
        <div className='container-lg my-3'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Feeling overwhelmed by Digital Marketing?</h3>
          </div>
          <div className='row secview'>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img
                  src='https://amoserv.s3.amazonaws.com/amorservconsulting/f1.png'
                  alt='f1'
                  className='
                homeimg'
                />
              </div>
              <p>Struggling to navigate the complex digital world?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div className='d-flex'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/f2.png' alt='f2' />
              </div>
              <p>Feeling frustrated with low online presence?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/f3.png' alt='f3' />
              </div>
              <p>Feeling held back by digital marketing challenges?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/f4.png' alt='f4' />
              </div>
              <p>
                Worried about missing opportunities to connect with your
                audience?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-0' className='py-5'>
        <div className='container-lg my-4'>
          <div className='row'>
            <div className='col-lg-6 align-items-center d-flex justify-content-center'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/g1.png' alt='g1' />
            </div>
            <div
              className='col-lg-6 align-items-center col-lg-6 col-md-12'
              style={{ marginTop: "80px" }}
            >
              <h3 className='mb-4'>Take control of your online success.</h3>

              <span className='my-4'>
                We understand your struggles and are here to help. Let us be
                your guide and empower your brand with personalized,
                results-driven digital marketing strategies. <br /> <br /> As
                your trusted digital marketing guide, we offer personalized
                strategies that are results-driven, saving you time and effort.
              </span>

              <div
                onClick={handleCallButtonClick}
                style={{ marginTop: "50px" }}
              >
                <Link href={""} className='btn-real btn btn-danger mb-3 mobile-center-button'>
                  Get Free Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12'>
            <h3 className='mb-4'>
              Discover our range of services designed to <br /> boost your
              online presence
            </h3>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/digi.png' width='25px' alt='digi' />
              <span href='' className='px-2 serv-link'>
                Digital Marketing
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/paid.png' width='25px' alt='paid' />
              <span href='' className='px-2 serv-link'>
                Paid Media
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/branding.png' width='25px' alt='brading' />
              <span href='' className='px-2 serv-link'>
                Branding
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/social.png' width='25px' alt='...' />
              <span href='' className='px-2 serv-link'>
                Social Media
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/website.png' width='25px' alt='website' />
              <span href='' className='px-2 serv-link'>
                Website Development
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/webop.png' width='25px' alt='webop' />
              <span href='' className='px-2 serv-link'>
                Website Optimization
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/searchop.png' width='25px' alt='seacrh' />
              <span href='' className='px-2 serv-link'>
                Search Engine Optimazation
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/email.png' width='25px' alt='email' />
              <span href='' className='px-2 serv-link'>
                Email Marketing
              </span>
            </button>
            <div className='text-center'>
              <h4 className='downt'>Get free marketing guide</h4>

              <Link
              href={"/"}
                onClick={generatePDF}
                className='btn mt-4 btn-real'
                to='/'
                style={{ color: "white", width: "200px" }}
              >
                Download Our Free Guide{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4' style={{ fontSize: "3rem" }}>
              Our Simplified 3-Step Process
            </h3>
          </div>
          <h5 className='my-4 text-center' style={{ fontSize: "1.5rem" }}>
            For Maximizing Your Digital Marketing Success{" "}
          </h5>

          <div className='centered-container' style={{ marginTop: "-160px" }}>
            <div className='threestep'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/threestep.png' alt='3-Step' />
            </div>
            <div className='threemob'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/threemob.png' alt='3-mobile' />
            </div>
          </div>

          <div className='text-center hp'>
            <p style={{ color: "#266", fontSize: "1.5rem" }}>
              it's Time to take controle of your online presence
            </p>
            <div onClick={handleCallButtonClick}>
              <Link href={""} className='btn mt-4 btn-real'>Get Free Proposal</Link>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg pt-5 mb-5'>
          <div className='col-12'>
            <h3 className='mb-4 fw-bold'>
              Trusted by Thousands of <br />
              Happy Customers
            </h3>
            <p className='text-center'>
              Proudly impacting industries with the best digital strategies.
              Hear <br />
              from our valued clients, not just us.
            </p>
          </div>
        </div>

        <Slide
          duration={15000}
          indicators={false}
          autoplay={false}
          arrows={false}
          cssClass='carousel-cards'
          responsive={[
            {
              breakpoint: 1200,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },

            {
              breakpoint: 1000,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },

            {
              breakpoint: 850,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },
          ]}
        >
          <CarouselCard
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t1.png' alt="t1"
            name='Lesley Bradley'
            position='CEO Stripe'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t2.png' alt="t2"
            name='John Addams'
            position='CEO Teeno'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t3.png' alt="t3"
            name='Viezh Robert'
            position='CEO TASK'
            desc="“Amorserv's dynamic digital strategies triggered an unprecedented surge in our sales revenue. Their insightful approach reshaped our marketing landscape”"
            rating='5'
          />
        </Slide>
      </section>
      <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container ' id='contact-form-section'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4' style={{ fontSize: "3rem" }}>
                Let’s Grow your Business
              </h3>
            </div>
            <p>
              Fuel your brand's growth with our best SEO strategies that drive{" "}
              <br /> success.
            </p>
          </div>
          {/* <ContactForm /> */}
        </div>
      </section>
    </>
  );
}
