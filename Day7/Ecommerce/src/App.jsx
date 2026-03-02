import Product from "./components/Products";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WishList from "../src/components/WishList";
import Cart from "./components/Cart";
import Registration from "./components/Registration";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from "./components/Login";
// import useCart from './customHooks/useCart';

function App() {
  // const cartData = useCart();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Product />} />
        <Route
          path="wish"
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
