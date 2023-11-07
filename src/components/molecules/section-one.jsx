/** @format */

import SectionHeading from "./section-heading";

import QuestionAnswer from "./quest-answer";

const SectionOne = () => {
  return (
    <div className='faq-section-one'>
      <SectionHeading
        title='What types of services does AmorServ Talents offer?'
        desc='At AmorServ Talents, we offer a comprehensive range of services including talent acquisition, remote recruitment, staffing solutions, IT outsourcing, and more. Our services are designed to cater to diverse business needs.'
      />

      <div className='faqs'>
        <QuestionAnswer
          question='How can AmorServ Talents assist in remote recruitment?'
          answer='We can help by first re-creating your resume to match the industry standard and share with our affiliated IT Companies.'
        />

        <QuestionAnswer
          question='What sets AmorServ Talents apart from other talent acquisition companies?'
          answer='We can help by first re-creating your resume to match the industry standard and share with our affiliated IT Companies.'
        />

        <QuestionAnswer
          question='Can I rely on AmorServ Talents for project-based staffing needs?'
          answer='We can help by first re-creating your resume to match the industry standard and share with our affiliated IT Companies.'
        />

        <QuestionAnswer
          question="How do I get started with AmorServ Talents' services?"
          answer='We can help by first re-creating your resume to match the industry standard and share with our affiliated IT Companies.'
        />
      </div>
    </div>
  );
};

export default SectionOne;
