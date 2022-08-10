import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

export default function App() {
  const [allFoodItems, setAllFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/food/get")
      .then((response) => response.json())
      .then((response) => setAllFoodItems(response))
      .catch((error) =>
        console.log("An error has occured in your Fetch for food.", error)
      );
  }, []);

  const renderAllFood = () => {
    return allFoodItems.map((foodItem) => {
      return <FoodItem foodItem={foodItem} />;
    });
  };

  return <div className="app">{renderAllFood()}</div>;
}
