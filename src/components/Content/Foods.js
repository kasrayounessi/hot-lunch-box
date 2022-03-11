import MenuCarousel from "react-elastic-carousel";
const items = require("./SampleData");

const Foods = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 4 },
  ];
  return (
    <div id="menu">
      <h1>Menu</h1>
      <MenuCarousel breakPoints={breakPoints} pagination={false}>
        {items.map((item) => {
          <div class="card" style="width: 18rem;">
            <img src={item.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.food}</h5>
              <p class="card-text">
                calories: {item.calories}
              </p>
            </div>
          </div>
        })}
      </MenuCarousel>
      <button onClick = {() => console.log(items[0].calories)}>click me</button>
    </div>
  );
};

export default Foods;
