import React from "react";
import { createRoot } from "react-dom/client";

const Pizzas = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pizzas, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizzas, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizzas, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
    React.createElement(Pizzas),
  ]);
};

const container = document.getElementById("root");
console.log(container);
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
root.render(React.createElement(App));
