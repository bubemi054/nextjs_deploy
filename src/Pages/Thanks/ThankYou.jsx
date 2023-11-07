import { Helmet } from 'react-helmet'

export default function ThankYou() {
  return (
    <>
    <Helmet>
       <title>Thank-You - Amorserv Consulting</title>
       <meta name='description' content='Amorserv Consulting Thank-You Page' />
     </Helmet>
     <div className="thank-you-container">
       <img className="thankyou" src='https://amoserv.s3.amazonaws.com/amorservconsulting/thankyou.png' alt="Thank You" />
       <div className="text-container">
         <h1>THANK YOU</h1>
         <p>Thank you for reaching out to AmorServ <br /> Consulting. We have received your <br /> message and will get back to you as soon <br />as possible. </p>
       </div>
     </div>
   </>
  )
}
