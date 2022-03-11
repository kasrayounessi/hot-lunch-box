import './Slides.css';

const Slides = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade custom-carousel bg-dark"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://thumbs.dreamstime.com/b/random-multicolored-spheres-computer-generated-abstract-form-large-small-balls-d-rendering-background-glossy-206845465.jpg" className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://ae01.alicdn.com/kf/HTB1Rok1JVXXXXcTXXXXq6xXFXXXh/13x18mm-Random-Mixed-Colorful-Oval-Glass-Cabochon-Flatback-Photo-Base-Tray-Blank-DIY-Making-Accessories-By.jpg_Q90.jpg_.webp" className="d-block w-100 img-fluid" alt="..." />
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
