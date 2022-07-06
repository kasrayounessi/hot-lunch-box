import './Slides.css';

const Slides = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade custom-carousel bg-dark"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="https://hot-lunch.s3.us-west-1.amazonaws.com/pasta-group.png" alt="pastas" width="400"/>
        </div>
        <div className="carousel-item active">
          <img src="https://hot-lunch.s3.us-west-1.amazonaws.com/nuggets-group.png" alt="nuggets" width="400"/>
        </div>
        {/* <div className="carousel-item">
          <img src="https://ae01.alicdn.com/kf/HTB1Rok1JVXXXXcTXXXXq6xXFXXXh/13x18mm-Random-Mixed-Colorful-Oval-Glass-Cabochon-Flatback-Photo-Base-Tray-Blank-DIY-Making-Accessories-By.jpg_Q90.jpg_.webp" className="d-block w-100 img-fluid" alt="..." />
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Slides;
