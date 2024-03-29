import "./Foods.css";
import Carousel from "react-elastic-carousel";
const items = require("./SampleData");

const Foods = () => {
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 4 },
  ];
  return (
    <div id="menu" className="bg-dark">
      <h1 className="custom-header">Menu</h1>
      <div className="jumbotron">
        <Carousel breakPoints={breakPoints} pagination={false}>
          {items.map((item) => (
            <div className="menu-item">
              <div className="img-container">
                <img src={item.img} className="img-fluid" alt={item.food} />
              </div>
              <div style={{ textAlign: "center" }}>{item.food}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Foods;
