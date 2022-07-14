import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className="jumbotron" id="aboutUs">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-content">
        Our team consists of indiviuals with many years of experience in food-prep,
        and we strive to restore children's trust in school cafeterias by providing 
        fresh and delicious meals.
      </p>
      {/* <hr className="my-4" />
      <p>
        Follow us on our social media.
      </p>
      <div classNameName="row">
        <div classNameName="col-sm-4">
        <a className="btn" href="#" role="button">
            <span><SocialIcon network="telegram" /></span>
          </a>
        </div>
        <div classNameName="col-sm-4">
        <a className="btn" href="#" role="button">
            <span><SocialIcon network="instagram" /></span>
          </a>
        </div>
        <div classNameName="col-sm-4">
          <a className="btn" href="#" role="button">
            <span><SocialIcon network="twitter" /></span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
