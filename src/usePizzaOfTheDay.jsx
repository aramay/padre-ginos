import { useEffect, useState } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  async function fetchPizzaOfTheDay() {
    const res = await fetch("/api/pizza-of-the-day");
    const data = await res.json();
    setPizzaOfTheDay(data);
  }

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
