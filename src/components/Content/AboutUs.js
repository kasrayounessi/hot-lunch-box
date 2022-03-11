import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div class="jumbotron" id="aboutUs">
      <h1 class="display-4">About Us</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
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
      </div>
    </div>
  );
};

export default AboutUs;
