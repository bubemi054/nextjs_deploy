/** @format */
import React from 'react';

const CarouselCard = (values) => {
  return (
    <section className="seventh-section container" >
      <div className='carousel-card'>
        <div className='info'>
          <img src={values.img} alt='Customer' draggable='false' />
          <div className='rating'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
            <path
              d='M22 10.6507C22.1 10.1507 21.7 9.55072 21.2 9.55072L15.5 8.75072L12.9 3.55072C12.8 3.35072 12.7 3.25072 12.5 3.15072C12 2.85072 11.4 3.05072 11.1 3.55072L8.6 8.75072L2.9 9.55072C2.6 9.55072 2.4 9.65072 2.3 9.85072C1.9 10.2507 1.9 10.8507 2.3 11.2507L6.4 15.2507L5.4 20.9507C5.4 21.1507 5.4 21.3507 5.5 21.5507C5.8 22.0507 6.4 22.2507 6.9 21.9507L12 19.2507L17.1 21.9507C17.2 22.0507 17.4 22.0507 17.6 22.0507C17.7 22.0507 17.7 22.0507 17.8 22.0507C18.3 21.9507 18.7 21.4507 18.6 20.8507L17.6 15.1507L21.7 11.1507C21.9 11.0507 22 10.8507 22 10.6507Z'
              fill='#CA1E52'
              fillOpacity='0.9'
            />
          </svg>
          <span>{values.rating}</span>
        </div>
        
          <div className='name-position'>
            <h5>{values.name}</h5>

            <h6>{values.position}</h6>
          </div>
        </div>

        <p className='desc'>{values.desc}</p>
      </div>
  
    </section>
  );
};

export default CarouselCard;
