import Pizza from "./Pizza";

const props = [
  {
    name: "The Big Meat Pizza",
    description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    img: "/public/pizzas/hawaiian.webp",
  },
];

// named function will show in stack trace
export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "M";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}></select>
            <option value="pepporoni">The pepporoni Pizza</option>
            <option value="Hawaiian">Hawaiian</option>
            <option value="big_meat">The Big Meat Pizza</option>
          </div>

          <div>
            <label htmlFor="pizza-size"></label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <input
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>

              <span>
                <input
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
          <Pizza menu={props} />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}
