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
        <div className="carousel-item">
          <img src="https://hot-lunch.s3.us-west-1.amazonaws.com/tenders-with-fries.png" alt="tenders" width="400" />
        </div>
        <div className="carousel-item">
          <img src="https://hot-lunch.s3.us-west-1.amazonaws.com/tenders-with-potatos.png" alt="tenders and potatos" width="400" />
        </div>
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
