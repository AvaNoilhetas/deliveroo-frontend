import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import Meal from "./components/Meal";
import Loader from "./components/Loader";
//import Cart from "./components/Cart";

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

  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      {!isLoading && (
        <main>
          <section>
            <Restaurant
              name={data.restaurant.name}
              description={data.restaurant.description}
              picture={data.restaurant.picture}
            />
            <div className="bg-gray-lightest">
              <div className="container grid md:grid-cols-3 gap-5">
                <div className="col-span-2">
                  {data.categories.map((category, index) => {
                    if (category.meals.length > 0) {
                      return (
                        <>
                          <Category key={index} title={category.name} />
                          <div className="grid xl:grid-cols-2 gap-5 pb-8">
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
                        </>
                      );
                    } else {
                      return "";
                    }
                  })}
                </div>
                <div className="col-span-1">{/* <Cart /> */}</div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
