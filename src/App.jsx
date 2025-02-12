// import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const props = [
  {
    name: "The Big Meat Pizza",
    description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    img: "/public/pizzas/hawaiian.webp",
  },
];
const App = () => {
  return (
    <div>
      <Pizza menu={props} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
