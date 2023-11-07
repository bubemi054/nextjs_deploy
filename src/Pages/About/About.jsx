"use client"

import React from "react";
import HeroBg from "../../components/organism/hero-bg";

export default function About() {
  return (
    <>

      {/* <HeroBg
        title={"Curious to Know Our Story?".toUpperCase()}
        desc='Indeed, our journey has been remarkable.'
        link='/contact-us'
        linkTitle='Learn More'
        img='https://amoserv.s3.amazonaws.com/amorservconsulting/about.png'
      /> */}

      <section className='about-intro container'>
        <div className='intro'>
          <h2>Who Is Amorserv Consulting?</h2>

          <article>
            Established in 2016, Amorserv Consulting stands as the best digital
            marketing agency in Chicago. We infuse our expertise into every
            strategy, driving brands towards digital excellence. As the best
            digital marketing agency in Chicago, USA, we're committed to
            delivering unparalleled results. The name “AmorServ ” conveys a
            strong message of dedication, commitment, and passion for serving
            customers. The fact that the name literally means “We Love to Serve
            You” reinforces this message and sets a high standard for the
            company.
          </article>
        </div>
      </section>

      <section className='container vmv'>
        <div className='ul'>
          <div className='vision'>
            <div className='image'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/vision.png' alt='vision' />
            </div>

            <h2>Our Vision</h2>

            <p>
              Our vision is to set new standards in the digital marketing
              industry with data-driven and ROI-yielding solutions.
            </p>
          </div>

          <div className='vision'>
            <div className='image'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/mission.png' alt='mission' />
            </div>

            <h2>Our Mission</h2>

            <p>
              Our mission is clearly refine the digital marketing landscape,
              empower business to thrive in the ever-evolving digital space, and
              place busineess in the sales forefront.
            </p>
          </div>

          <div className='vision'>
            <div className='image'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/value.png' alt='value' />
            </div>

            <h2>Our Value</h2>

            <p>
              The focus on the TRIBE core values - Transparency, Result-Driven,
              Impact-Focused, Best People, and Excellence sets a high standard
              for us.
            </p>
          </div>
        </div>
      </section>

      <section className='team container'>
        <h2>Our Team</h2>

        <div className='members'>
          <div className='first-row'>
            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ceo.png' alt='ceo' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Otse Amorighoye</h6>
                <p>Founder - CEO</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/siji.png' alt='siji' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Siji Olojola</h6>
                <p>Marketing Manager</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/valentine.png' alt='valentine' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Valentine Okoye</h6>
                <p>SEO Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/digvijay.png' alt='dig' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Digvijay Ahuja</h6>
                <p>Data Entry Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/chiamaka.png' alt='chiamaka' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Chiamaka Atuchukwu</h6>
                <p>Social Media Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/tamara.png' alt='tamara' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Tamaraebi Etifa</h6>
                <p>Content Writer and Research Analyst</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/olaide.png' alt='olaide' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Olaide Opaleke</h6>
                <p>Content Writer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/temidayo.png' alt='temidayo' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Temidayo Akinuli</h6>
                <p>Multimedia Designer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/otaabasi.png' alt='otaabasi' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Otoabasi Ekwere</h6>
                <p>Multimedia Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='partnership'>
        <h2>PARTNERSHIPS & ACCOLADES</h2>
        <div className='partner-images'>
          <ul className='container p-5'>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/visa.png' alt='visi' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/amzon.png' alt='amazon' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/cox.png' alt='cox' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/citi.png' alt='citi' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/samsung.png' alt='smasung' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/cnn.png' alt='cnn' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/traveller.png' alt='traveller' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/gold.png' alt='gold' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/forbes.png' alt='forbe' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/star.png' alt='star' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/google.png' alt='google' />
            </li>
            <li>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/flock.png' alt='flock' />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
