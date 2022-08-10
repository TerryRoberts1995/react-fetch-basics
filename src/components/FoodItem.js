import React from "react";

const FoodItem = (props) => {
  return (
    <div>
      <div>{props.foodItem.title}</div>
      <div>{props.foodItem.price}</div>
    </div>
  );
};

export default FoodItem;
