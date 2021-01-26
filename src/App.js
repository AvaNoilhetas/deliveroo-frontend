import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Meal from "./components/Meal";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState({});
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroooooooo-backend.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectMeal = (id, title, price) => {
    const newCart = [...cart];
    let item = newCart.find(x => x.id === id);
    if (item) {
      item.quantity += 1;
      setCart(newCart);
    } else {
      newCart.push({ id: id, title: title, price: price, quantity: 1 });
      setCart(newCart);
    }
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
                                  id={meal.id}
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
                  <Cart cart={cart} setCart={setCart} />
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
