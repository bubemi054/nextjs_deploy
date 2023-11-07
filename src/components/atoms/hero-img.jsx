
   
  const HeroImage = ({img}) => {
    return (
      <div className="image">
        <img src={img} className="img-fluid" alt="hero-caption" />
      </div>
    );
  };
   
  export default HeroImage;