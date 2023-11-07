import React from 'react'
import QuestionAnswer from '../../components/molecules/quest-answer'
import ContactForm from '../../components/layouts/ContactForm'
import { Link } from 'react-router-dom'
import HeroBg from '../../components/organism/hero-bg'
import { Helmet } from 'react-helmet'

export default function Sm() {
  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Helmet>
      <title>SMM - Amorserv Consulting</title>
      <meta name='description' content='Amorserv Consulting SMM Page' />
    </Helmet>
    <HeroBg
      title={" How SMO builds your brand awareness?".toUpperCase()}
      desc='Social Media Marketing is a cost-effective way to maximize 
      brand awareness and witness tangible results as your
      message resonates across social channels.'
      link=''
      linkTitle='Schedule a Call'
      img='https://amoserv.s3.amazonaws.com/amorservconsulting/smo.png' alt="semm"
    />

    <section
      className='service-feat p-1'
      style={{ backgroundColor: "#eff3fd" }}
    >
      <h2 style={{ fontSize: '3rem' }} className="pb-3">Our Social Media Marketing Services</h2>
      <p className='text-center' style={{ fontSize: '1.5rem' }}>
        Explore our comprehensive social media marketing services list <br />{" "}
        compiled just for you.
      </p>
      <div className='contents'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff.png' alt='smm' className='fram' />
                <h4 className='card-title'>Content Creation</h4> <br />
                <p className='card-text'>
                  Our content specialists create <br /> captivating and
                  shareable content, <br /> from posts to visually engaging{" "}
                  <br /> graphics
                </p>
              </div>
            </div>

            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff1.png' alt='smm' />
                <h4 className='card-title'>Social Media Advertising</h4>{" "}
                <br />
                <p className='card-text'>
                  Amplify reach with targeted social <br /> media ads. We
                  pinpoint your ideal <br /> audience, maximizing engagement.
                </p>
              </div>
            </div>

            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff2.png' alt='skmm' />
                <h4 className='card-title'>Influencer Marketing</h4> <br />
                <p className='card-text'>
                  Leverage industry thought leaders to <br /> boost
                  visibility. Our influencer <br /> partnerships amplify your
                  message <br /> to a wider audience.
                </p>
              </div>
            </div>

            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff3.png' alt='smm' />
                <h4 className='card-title'>Handle each platform</h4> <br />
                <p className='card-text'>
                  Tailor content for each platform's <br />
                  unique audience and style. From <br /> Facebook to LinkedIn,
                  we speak your <br />
                  audience's language.
                </p>
              </div>
            </div>
            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff4.png' alt='smjjm' />
                <h4 className='card-title'>
                  Social Media Contest and Giveaways
                </h4>{" "}
                <br />
                <p className='card-text'>
                  Excite your audience with engaging <br />
                  contests, nurturing brand loyalty <br /> through
                  interaction.
                </p>
              </div>
            </div>
            <div className='col-md-4 text-center p-5'>
              <div className='card-body'>
                <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff5.png' alt='smm' />
                <h4 className='card-title'>
                  Instant replies and user engagement
                </h4>{" "}
                <br />
                <p className='card-text'>
                  Build connections by promptly <br /> responding to user
                  queries. Our <br /> proactive engagement fosters trust{" "}
                  <br />
                  and a positive brand image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center whyseo p-5'>
      <div className='container'>
        <h2 style={{ fontSize: "3rem" }}>
          Why you need Social Media <br /> Marketing?
        </h2>
        <p>
          Social media marketing service is essential in expanding your brand
          reach, <br /> engagement, and driving conversions.
        </p>
        <br />
        <div className='row'>
          <div className='col-md-3'>
            <h1>65%</h1>
            <p>
              of consumers learn about <br /> new brands on social <br />{" "}
              media.
            </p>
          </div>
          <div className='col-md-3'>
            <h1>78%</h1>
            <p>
              of consumers are willing to buy <br /> from brands after a
              positive <br /> social media experience.
            </p>
          </div>
          <div className='col-md-3'>
            <h1>91%</h1>
            <p>
              of executives will increase social <br />
              media marketing budgets in the <br /> next 3 years.
            </p>
          </div>
          <div className='col-md-3'>
            <h1>72.2%</h1>
            <p>
              of companies use social <br /> media data to inform <br />
              business decisions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section id='sec-6' className='py-5'>
      <div className='text-center service-feat pt-5'>
        <div className='container-lg my-4'>
          <h3 style={{ fontSize: "3rem" }}>
            Why Choose Amorserv SM Services?
          </h3>

          <p style={{ fontSize: "1.5rem" }}>
            Unlock a journey to online success with SEO expertise that
            delivers exceptional results
          </p>
          <div className='row pt-5'>
            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff7.png' alt='smm' />
              <h3 className='pt-4'>Data Driven</h3>
              <p>
                At Amorserv Consulting, we propel <br /> success with
                data-driven strategies <br /> for remarkable growth and
                campaign <br /> performance.
              </p>{" "}
              <br /> <br /> <br />
            </div>
            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff8.png' alt='smm' />
              <h3 className='pt-4'>Dedicated SM Professionals</h3>
              <p>
                We have a devoted team of social <br />
                media experts elevating your brand's <br /> online presence
                and bringing your <br /> vision to life for your target
                audience
              </p>
            </div>
            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff9.png' alt='smm' />
              <h3 className='pt-4'>Certified Experts</h3>
              <p>
                Trust our industry-certified SM <br /> professionals. Our
                team's expertise <br /> provide a competitive edge backed{" "}
                <br /> by knowledge.
              </p>
            </div>

            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff10.png' alt='smm' />
              <h3 className='pt-4'>Industry Insights</h3>
              <p>
                Confidently navigate the digital <br />
                landscape with insights from years of <br /> experience,
                propelling your brand to <br /> sustained success.
              </p>
            </div>
            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff11.png' alt='smm' />
              <h3 className='pt-4'>Team Support</h3>
              <p>
                Collaboration is our core. With a <br /> dedicated SM team,
                you're a partner <br /> on a growth journey. Your goals are{" "}
                <br /> ours
              </p>
            </div>
            <div className='col-md-4 p-5'>
              <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/ff12.png' alt='smm' />
              <h3 className='pt-4'>Transparent Reporting</h3>
              <p>
                Transparency is our priority. Our <br /> reporting is a
                detailed map of your <br /> brand's journey, empowering you{" "}
                <br /> every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='sec-6' className='py-5'>
      <div className='container-lg my-4'>
        <div className='col-12 text-center'>
          <h3 className='mb-4' style={{ fontSize: "3rem" }}>Amorserv Agile SM Methodology</h3>
        </div>
        <p className='my-4 text-center' style={{ color: "#3D3D3D" }}>
          We adopt tailored strategies to fuel captivating content. Meticulous
          monitoring to <br />
          ensure growth, adapting to your brand journey.
        </p>
        <div className='centered-container' style={{ marginTop: "-160px" }}>
          <div className='threestep'>
            <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/threestep.png' alt='3-Step' />
          </div>
          <div className='threemob'>
            <img src='https://amoserv.s3.amazonaws.com/amorservconsulting/threemob.png' alt='3-mobile' />
          </div>
        </div>
       
        <div className='text-center' style={{ marginTop: "-170px" }}>
          <Link className='btn mt-4 btn-real' onClick={handleCallButtonClick}>
            Get Started
          </Link>
        </div>
      </div>
    </section>

    <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
      <div className='container ' id='contact-form-section'>
        <div className='content text-center'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'style={{ fontSize: "3rem" }}>Transform Your Business Today</h3>
          </div>
          <p>
            Let's discuss how our digital marketing expertise can boost your
            online <br /> presence and revenue.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>

    <section id='sec-6' className='py-5'>
      <div className='container-lg my-4'>
        <div className='col-12 text-center'>
          <h3 className='mb-4' style={{ fontSize: "3rem" }}>Social Media Marketing FAQs</h3>
        </div>
      </div>
    </section>

    <div className='faq-container'>
      <div className='faq-section-one'>
        <div className='faqs'>
          <QuestionAnswer
            question='What is social media marketing? '
            answer='Social media marketing is the strategic use of social platforms to connect with your audience, build brand awareness, engage users, and ultimately achieve business goals. '
          />

          <QuestionAnswer
            question='What are the 5 ways of social media marketing?  '
            answer='Social media marketing encompasses strategies like content creation, engagement with followers, paid advertising, influencer partnerships, and data analysis for continuous improvement. '
          />

          <QuestionAnswer
            question="What are the 7 C's of social media marketing?"
            answer='Embrace the optimal route to navigate evolving online business dynamics and catalyze business expansion by crafting a robust digital marketing strategy. A powerful approach involves integrating the 7 Cs—customer, content, context, community, convenience, cohesion, conversion. '
          />

          <QuestionAnswer
            question='What is the importance of social media optimization (SMO)? '
            answer="Social Media Optimization (SMO) is crucial for enhancing your brand's online presence, improving engagement, driving traffic, and fostering a deeper connection with your target audience."
          />

          <QuestionAnswer
            question='How does social media marketing impact brand visibility?'
            answer='Social media marketing significantly boosts brand visibility by leveraging platforms to connect, engage, and expose your brand to a larger audience, driving recognition and growth. '
          />
        </div>
      </div>
    </div>
  </>
  )
}
