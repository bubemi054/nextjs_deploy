import { Link } from "react-router-dom";
import { useEffect } from "react";

const HeroBut = ({ link, text }) => {
  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // If you need to attach event listeners or perform any side effects
    // for this component, you can do so inside this useEffect hook.
    // For example, attaching an event listener to the button.

    const button = document.querySelector(".hero-but button");

    if (button) {
      button.addEventListener("click", handleCallButtonClick);
    }

    return () => {
      // Cleanup the event listener when the component unmounts.
      if (button) {
        button.removeEventListener("click", handleCallButtonClick);
      }
    };
  }, []);

  return link ? (
    <Link to={link} className="hero-but">
      <button>{text}</button>
    </Link>
  ) : (
    <div className="hero-but" onClick={handleCallButtonClick}>
      <button>{text}</button>
    </div>
  );
};

export default HeroBut;
