import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import Meal from "./components/Meal";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://delili-backend.herokuapp.com/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement... </div>
  ) : (
    <div>
      <Header />
      <main>
        <section>
          <Restaurant
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          {data.categories.map((category, index) => {
            return (
              <div>
                <Category key={index} title={category.name} />
                {data.categories[index].meals.map((meal, i) => {
                  return (
                    <Meal
                      key={i}
                      title={meal.title}
                      description={meal.description}
                      price={meal.price}
                      picture={meal.picture}
                      popular={meal.popular}
                    />
                  );
                })}
              </div>
            );
          })}

          <Cart />
        </section>
      </main>
    </div>
  );
}

export default App;
