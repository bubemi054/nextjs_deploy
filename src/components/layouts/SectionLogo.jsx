import React from 'react';

const SectionLogo = ({ img }) => {
  return (
    <div className="section-logo">
      <img src={img} alt="Logo" style={{ height: '4rem' }}/>
    </div>
  );
};

export default SectionLogo;
