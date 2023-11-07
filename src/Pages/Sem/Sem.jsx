/** @format */

import React from "react";
import QuestionAnswer from "../../components/molecules/quest-answer";
import ContactForm from "../../components/layouts/ContactForm";
import HeroBg from "../../components/organism/hero-bg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import sem0 from "../../Assets/sem0.png";
import updates from "../../Assets/updates.png";

import ff12 from "../../Assets/ff12.png";
import ff13 from "../../Assets/ff13.png";
import ff14 from "../../Assets/ff14.png";

import why3 from "../../Assets/why3.png";
import why2 from "../../Assets/why2.png";
import why1 from "../../Assets/why1.png";
import ff1 from "../../Assets/ff1.png";
import ff2 from "../../Assets/ff2.png";
import ff3 from "../../Assets/ff3.png";
import ff4 from "../../Assets/ff4.png";
import ff5 from "../../Assets/ff5.png";
import ff6 from "../../Assets/ff6.png";

import se1 from "../../Assets/se1.png";
import se2 from "../../Assets/se2.png";
import se3 from "../../Assets/se3.png";
import se4 from "../../Assets/se4.png";
import se5 from "../../Assets/se5.png";
import se6 from "../../Assets/se6.png";

export default function Sem() {
  return (
    <>
      <Helmet>
        <title>SEM - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting SEM Page' />
      </Helmet>
      <HeroBg
        title={"  How Search Engine Marketing promotes your brand online?".toUpperCase()}
        desc="Search engine marketing propels your brand's online visibility by strategically engaging your target audience 
      and driving valuable traffic."
        link=''
        linkTitle='Schedule a Call'
        img={sem0}
      />
      <div style={{ color: "#266", textAlign: "center" }}>
        <h1 className='pt-5' style={{ fontSize: "3rem" }}>
          {" "}
          What is Search Engine Marketing?
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          Understanding the Essence of Search Engine Marketing (SEM)
        </p>
      </div>

      <section
        className='header-bg container'
        style={{ backgroundColor: "white" }}
      >
        <div className='header'>
          <div className='content semp'>
            <p>
              Search Engine Marketing (SEM) is a dynamic digital marketing
              strategy that leverages paid advertising to maximize online
              visibility. By bidding on relevant keywords, businesses position
              themselves prominently on search engine results pages (SERPs),
              gaining immediate exposure to potential customers actively seeking
              products or services. SEM encompasses Pay-Per-Click (PPC)
              campaigns, where advertisers pay only when users click their ads,
              driving targeted traffic to their websites. With meticulous
              keyword research, ad optimization, and performance analysis, SEM
              empowers businesses to achieve rapid brand recognition, amplify
              website traffic, and attain quantifiable ROI in today's
              competitive digital landscape.
            </p>
          </div>

          <div className='pb-5 semimg'>
            <img src={updates} className='img-fluid' alt='header' />
          </div>
        </div>
      </section>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 className='pb-4' style={{ fontSize: "3rem" }}>
          How does Search Engine Marketing work?
        </h2>
        <p style={{ fontSize: "1.5rem" }}>
          Search Engine Marketing is one of the best digital marketing strategy
          you can leverage for your business growth.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff12} alt='sem' />
                  <h3>Drive Conversions</h3>
                  <p>
                    Use PPC advertising to reach <br />
                    potential customers. Bid on <br />
                    relevant keywords, your ads <br />
                    appear in searches
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff13} alt='sem' />
                  <h3>Optimization</h3>
                  <p>
                    Leverage strategic keyword <br />
                    research for online optimization. <br />
                    Select audience-searched
                    <br /> keywords for higher search
                    <br /> relevance.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff14} alt='sem' />
                  <h3>Tracking</h3>
                  <p>
                    Track and analyze conversions
                    <br /> for SEM impact measurement.
                    <br /> Identify ads driving purchases,
                    <br /> sign-ups, or interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 className='chief'>
              Why you need Search Engine <br /> Marketing?
            </h3>

            <p>
              SEM empowers your business to appear prominently on search engine
              results pages (SERPs), <br /> precisely when potential customers
              are actively searching for what you offer.
            </p>
            <div className='row pt-5 '>
              <div className='col-md-4 pt-5'>
                <img src={ff1} alt='sem' />
                <h3>Instant Visibility</h3>
                <p>
                  Get immediate exposure with top <br /> search ads. Be visible
                  when potential <br />
                  customers actively search, a click <br /> away from
                  conversions
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff2} alt='sem' />
                <h3>Cost Control</h3>
                <p>
                  SEM uses a Pay-Per-Click model, <br /> cost-effective with
                  payment only <br />
                  when users click on your ads.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff3} alt='sem' />
                <h3>Measurable ROI</h3>
                <p>
                  Track every click and conversion for <br />
                  accurate ROI calculation. <br />
                  Transparently ensure your budget <br /> generates returns.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff4} alt='sem' />
                <h3>Targeted reach</h3>
                <p>
                  SEM targets interested users, ensuring <br />
                  your investment reaches a relevant <br /> and receptive
                  audience
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff5} alt='sem' />
                <h3>Competitive Edge</h3>
                <p>
                  Outshine competitors by leading <br />
                  search results. Be the first choice <br />
                  customers see, enhancing credibility <br /> and authority.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff6} alt='sem' />
                <h3>Data-Driven Decisions</h3>
                <p>
                  Uncover insights with analytics. <br />
                  Identify top-performing keywords,
                  <br /> ads, and strategies for maximum <br /> impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3
              className='mb-4'
              style={{ fontSize: "3rem", lineHeight: "3.5rem" }}
            >
              Our Comprehensive <br /> SEM Services
            </h3>
            <p style={{ fontSize: "1.5rem" }}>
              Amplify Your Digital Footprint with Our best SEM Services. Drive
              targeted traffic, boost <br /> engagement, and achieve measurable
              results through our expert Pay-Per-Click strategies
            </p>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se1} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Pay-Per-Click (PPC){" "}
              </Link>
            </button>

            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se2} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Landing Page Optimization
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se3} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Keyword Research and Optimization
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se4} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Ad Copywriting
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se5} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Ad Campaign Creation{" "}
              </Link>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se6} width='25px' alt='...' />
              <Link to='' className='px-2 serv-link'>
                Performance Analytics
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem", lineHeight: "3.5rem" }}>
              Why Choose Amorserv SEM <br />
              Services?
            </h3>

            <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
              With our comprehensive Search Engine Marketing service, we are
              your best digital <br /> marketing partner for success.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={why1} alt='sem' />
                <h3 className='pt-4'>Proven Performance</h3>
                <p className='pt-3'>
                  Our SEM services deliver tangible <br /> results, driving
                  increased website <br /> traffic, engagement, and conversions{" "}
                  <br /> across diverse industries.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={why2} alt='sem' />
                <h3 className='pt-4'>Tailored Strategies</h3>
                <p className='pt-3'>
                  We recognize unique businesses. Our <br /> SEM experts create
                  custom strategies <br /> with keywords and ad campaigns <br />{" "}
                  tailored to your audience and goals.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={why3} alt='sem' />
                <h3 className='pt-4'>Expert Insight</h3>
                <p className='pt-3'>
                  With certified SEM professionals, we <br /> bring extensive
                  expertise from <br /> campaign creation to optimization,{" "}
                  <br />
                  driving exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container ' id='contact-form-section'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4' style={{ fontSize: "3rem" }}>
                Unlock Your Digital Potential Today!
              </h3>
            </div>
            <p>
              Let our SEM services experts assist you to unleash the power of
              tailored <br /> digital solutions. Let's connect and bring your
              vision to life.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 style={{ fontSize: "3rem" }}>
              Search Engine Optimization FAQs
            </h3>
          </div>
        </div>
      </section>

      <div className='faq-container'>
        <div className='faq-section-one'>
          <div className='faqs'>
            <QuestionAnswer
              question='How does SEM differ from traditional advertising?'
              answer='SEM focuses on displaying ads to users actively searching for specific keywords, whereas traditional advertising casts a broader net across various platforms.'
            />

            <QuestionAnswer
              question='What are the benefits of using Google Ads for SEM?'
              answer='Google Ads offers a wide reach, targeting options, and detailed tracking, allowing businesses to tailor their campaigns and monitor performance effectively.'
            />

            <QuestionAnswer
              question='What is SEM vs SEO?'
              answer="SEM involves paid advertising on search engines, while SEO focuses on optimizing your website's content to improve organic search rankings."
            />
            <QuestionAnswer
              question='What type of marketing is search engine marketing?'
              answer='SEM falls under digital marketing, specifically targeting users searching for products or services on search engines.'
            />
            <QuestionAnswer
              question='What are the two types of search engine marketing?'
              answer='The two types of SEM are Pay-Per-Click (PPC) advertising, where you pay when users click your ads, and Search Engine Optimization (SEO), where you optimize your website for higher organic rankings.'
            />
          </div>
        </div>
      </div>
    </>
  );
}
