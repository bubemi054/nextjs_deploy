/** @format */

import React from "react";
import HeroBg from "../../components/organism/hero-bg";
import { Helmet } from "react-helmet";
import CarouselCard from "../../components/layouts/CarouselCard";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting Portfolio Page' />
      </Helmet>
      <HeroBg
        title={"Explore our Portfolio for More Insight".toUpperCase()}
        desc='Dive into our portfolio for a closer look at our dynamic projects. Witness how our strategies have transformed businesses. Our work is a testament to our expertise, innovation, and commitment to driving success.'
        link='/contact-us'
        linkTitle='Free Consultation'
        img='https://amoserv.s3.amazonaws.com/amorservconsulting/portfolio.png'
      />

      <section id='port-1' className='py-5 '>
        <div className='container-lg my-4 portfolio'>
          <div className='row gx-md-5'>
            <div className='col-md-6 my-4'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port1.png' alt='many things' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    TechNova Solutions
                  </Link>
                  <p>
                    TechNova Solutions, a dynamic player in the IT sector,
                    partnered with Amorserv Consulting to boost their online
                    visibility and reach. Through meticulous keyword research,
                    on-page optimization, and strategic content creation, we
                    propelled TechNova's website to the forefront of search
                    engine results.
                  </p>
                  <p className='lh-md'>
                    The result? A staggering 150% increase in organic traffic,
                    with a marked uptick in qualified leads and conversions. Our
                    tailored content not only educated their audience but also
                    positioned TechNova as a thought leader in their field,
                    solidifying their industry authority.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port2.png' alt='man of war' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    FreshBite Restaurants
                  </Link>
                  <p>
                    FreshBite Restaurants, a bustling culinary establishment,
                    entrusted Amorserv Consulting to enhance their social media
                    presence and engage their hungry audience. Leveraging
                    data-driven insights, we crafted compelling social media
                    campaigns that resonated with their target demographic.
                  </p>
                  <p className='lh-md'>
                    By curating visually appealing content and implementing
                    strategic posting schedules, we managed to double their
                    follower count within a mere quarter. Moreover, our
                    innovative campaigns spurred a 30% increase in restaurant
                    reservations, translating online buzz into real-world foot
                    traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port3.png' alt='peace of mind' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    Blossom Beauty
                  </Link>
                  <p>
                    Blossom Beauty, a wellness brand dedicated to self-care,
                    collaborated with Amorserv Consulting to cultivate an
                    authoritative digital voice. Our expert content creators
                    designed a series of informative and engaging blog posts
                    that not only educated Blossom Beauty's audience but also
                    resonated with their values.
                  </p>
                  <p className='lh-md'>
                    This strategy led to a remarkable 40% surge in website
                    traffic, solidifying their position as a reliable source of
                    beauty insights. Through consistent, value-driven content,
                    Blossom Beauty established itself as an industry thought
                    leader, fostering customer trust and loyalty.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port4.png' alt='searching' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    Quantum Electronics
                  </Link>
                  <p>
                    Quantum Electronics, a leading player in electronics
                    manufacturing, joined forces with Amorserv Consulting to
                    amplify their digital reach through targeted PPC
                    advertising. Employing a data-driven approach, we
                    meticulously selected keywords aligned with Quantum's
                    offerings, crafting compelling ad copies that resonated with
                    their audience.
                  </p>
                  <p className='lh-md'>
                    The result was a remarkable 25% increase in online leads
                    within the first quarter. Our strategic bid management and
                    ad optimization not only drove rapid results but also
                    positioned Quantum as a prominent industry player, expanding
                    their customer base and boosting ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port5.png' alt='place to be' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    StyleSphere Boutique
                  </Link>
                  <p>
                    StyleSphere Boutique, an emerging fashion brand, harnessed
                    the power of Amorserv Consulting's email marketing expertise
                    to nurture customer relationships and drive sales growth.
                    Through personalized email campaigns, we delivered tailored
                    content that resonated with StyleSphere's fashion-conscious
                    audience.
                  </p>
                  <p className='lh-md'>
                    This approach resulted in a remarkable 20% increase in
                    sales, as subscribers eagerly embraced exclusive offers and
                    curated content. By fostering a direct line of communication
                    with their customers, StyleSphere not only boosted revenue
                    but also solidified its brand loyalty, making each email a
                    gateway to fashion inspiration.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src='https://amoserv.s3.amazonaws.com/amorservconsulting/port6.png' alt='come to man' />
                <div className='py-3 px-4'>
                  <Link to='/portfolio' className='card-title'>
                    ST
                  </Link>
                  <p>
                    ST, a B2B IT service provider, collaborated with Amorserv
                    Consulting to turbocharge their lead generation efforts.
                    Employing a strategic mix of data analysis, targeted
                    outreach, and value-driven content, we ignited their sales
                    pipeline, resulting in a substantial 50% growth within a
                    short span.
                  </p>
                  <p className='lh-md'>
                    By identifying and engaging qualified prospects, we fostered
                    valuable client relationships, driving not only immediate
                    conversions but also cultivating long-term partnerships.
                    ST's growth story showcases our dedication to delivering
                    tangible results and propelling businesses toward sustained
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='btn-real'>
            <Link to='/contact-us' style={{ color: "white" }}>
              Schedule a Call
            </Link>
          </button>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg pt-5'>
          <div className='col-12 text-center'>
            <h3 className='mb-4 fw-bold'>
              Trusted by Thousands of <br />
              Happy Customer
            </h3>
            <p>
              Discover the voices of success through the <br /> words of our
              satisfied clients.{" "}
            </p>
          </div>
        </div>

        <Slide
          duration={15000}
          indicators={false}
          arrows={false}
          autoplay={false}
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
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t1.png'
            name='Lesley Bradley'
            position='CEO Stripe'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t2.png'
            name='John Addams'
            position='CEO Teeno'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img='https://amoserv.s3.amazonaws.com/amorservconsulting/t3.png'
            name='Viezh Robert'
            position='CEO TASK'
            desc="“Amorserv's dynamic digital strategies triggered an unprecedented surge in our sales revenue. Their insightful approach reshaped our marketing landscape”"
            rating='5'
          />
        </Slide>
      </section>
    </>
  );
}
