/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";


const ScrollToTop = ({ children }) => {
  const location = useLocation();

  const pathname = location.pathname;

  useEffect(() => {
    console.log("scrolled");

    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
