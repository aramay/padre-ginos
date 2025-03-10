import { useState, useEffect, useContext } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";
import { CartContext } from "./context";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// named function will show in stack trace
export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useContext(CartContext);

  async function checkout() {
    setLoading(true);
    await fetch("api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });
    setLoading(false);
    setCart([]);
  }

  let price, selectedPizza;

  if (!loading) {
    // console.log(pizzaTypes);
    selectedPizza = pizzaTypes.find((pizza) => {
      // console.log(pizza);
      return pizzaType === pizza.id;
    });
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();

    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  let options = pizzaTypes.map((pizza) => {
    return (
      <>
        <option key={pizza.id} value={pizza.id}>
          {pizza.name}
        </option>
      </>
    );
  });

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {options}
            </select>
          </div>

          <div>
            <label htmlFor="pizza-size"></label>
            <div>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <input
                onChange={(e) => setPizzaSize(e.target.value)}
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>

              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>

        <div className="order-pizza">
          {loading ? <h1>loading</h1> : <Pizza menu={selectedPizza} />}

          <p>{price}</p>
        </div>
      </form>
      {loading ? (
        <h2>LOADING ... </h2>
      ) : (
        <Cart checkout={checkout} cart={cart} />
      )}
    </div>
  );
}
