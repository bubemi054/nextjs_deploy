
import HeroTitle from "../atoms/hero-title";
import HeroImage from "../atoms/hero-img";
import HeroDescription from "../atoms/hero-desc";
import HeroBut from "../atoms/hero-but";
 

const Hero = ({title, description, p, link, image, linkTitle}) => {
  return (
    <div className="header">
      <div className="content">
        <HeroTitle title={title} />
        <HeroDescription desc={description} />
        <p className="cont">{p}</p>
        {linkTitle && <HeroBut text={linkTitle} link={link} />}
      </div>
      <HeroImage img={image} />
    </div>
  );
};
 
export default Hero;