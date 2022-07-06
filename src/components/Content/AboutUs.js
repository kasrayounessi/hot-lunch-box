import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div class="jumbotron" id="aboutUs">
      <h1 class="display-4">About Us</h1>
      <p class="lead">
        Our team consists of indiviuals with many years of experience in food-prep,
        and we strive to restore children's trust in school cafeterias by providing 
        fresh and delicious meals.
      </p>
      {/* <hr class="my-4" />
      <p>
        Follow us on our social media.
      </p>
      <div className="row">
        <div className="col-sm-4">
        <a class="btn" href="#" role="button">
            <span><SocialIcon network="telegram" /></span>
          </a>
        </div>
        <div className="col-sm-4">
        <a class="btn" href="#" role="button">
            <span><SocialIcon network="instagram" /></span>
          </a>
        </div>
        <div className="col-sm-4">
          <a class="btn" href="#" role="button">
            <span><SocialIcon network="twitter" /></span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
