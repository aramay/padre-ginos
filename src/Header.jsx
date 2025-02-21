import { useContext } from "react";
import { CartContext } from "./context";
export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <h1 className="logo">Padres Ginos Pizza</h1>

      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
