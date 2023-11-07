/** @format */

import SectionTitle from "../atoms/section-title";

import HeroDescription from "../atoms/hero-desc";

const SectionHeading = ({ title, desc }) => {
  return (
    <div className='section-heading'>
      <SectionTitle title={title} />

      <HeroDescription desc={desc} />
    </div>
  );
};

export default SectionHeading;
