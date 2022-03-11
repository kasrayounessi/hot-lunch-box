import './Foods.css';
import Carousel from "react-elastic-carousel";
const items = require("./SampleData");

const Foods = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 4 },
  ];
  return (
    <div id="menu" className="bg-dark">
      <h1 className="custom-header">Menu</h1>
      <div className="jumbotron">
      <Carousel breakPoints={breakPoints} pagination={false}>
        {items.map((item) =>
          // <div class="card" style="width: 18rem;">
          //   <img src={item.img} class="card-img-top" alt="..." />
          //   <div class="card-body">
          //     <h5 class="card-title">{item.food}</h5>
          //     <p class="card-text">
          //       calories: {item.calories}
          //     </p>
          //   </div>
          // </div>
          <div className="menu-item">
            <img src={item.img} width="200px"/>
            <div>{item.food}</div>
            <p>calories: {item.calories}</p>
          </div>
        )}
      </Carousel>
      </div>
    </div>
  );
};

export default Foods;
