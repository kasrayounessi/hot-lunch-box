import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div class="jumbotron bg-dark text-light" id="contactUs">
        <h1 class="display-4">Contact Us</h1>
        <p class="lead">
          If you have any questions or concerns, feel free to contact us using these two methods.
        </p>
        <hr class="my-4" />
        <p>
          Email:&nbsp;
          <a href="mailto:sherybanoo21@gmail.com" className="custom-text-color">
            sherybanoo21@gmail.com
          </a>
        </p>
        <p>Phone number:&nbsp;
        <a href="tel:818-220-4200" className="custom-text-color">
          (818) 220-4200
        </a>
        </p>
        {/* <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
