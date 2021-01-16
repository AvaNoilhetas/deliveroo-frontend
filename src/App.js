import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import Meal from "./components/Meal";
import Loader from "./components/Loader";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://delili-backend.herokuapp.com/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectMeal = (title, price) => {
    const newCart = [...cart];
    newCart.push({ title: title, price: price });
    setCart(newCart);
  };

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
              <div className="container grid md:grid-cols-6 gap-5">
                <div className="lg:col-span-4 md:col-span-3 col-span-6">
                  {data.categories.map((category, index) => {
                    if (category.meals.length > 0) {
                      return (
                        <div key={index}>
                          <Category title={category.name} />
                          <div className="grid xl:grid-cols-2 gap-5 pb-8">
                            {data.categories[index].meals.map(meal => {
                              return (
                                <Meal
                                  key={meal.id}
                                  title={meal.title}
                                  description={meal.description}
                                  price={meal.price}
                                  picture={meal.picture}
                                  popular={meal.popular}
                                  handleSelectMeal={handleSelectMeal}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })}
                </div>
                <div className="lg:col-span-2 md:col-span-3 col-span-6 relative">
                  <Cart cart={cart} />
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
