import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { totalAmount } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  const { carteItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(totalAmount());
  }, [carteItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
