import { useReducer } from "react";


const initialCart = [];


function cartReducer(cart, action) {
  switch (action.type) {

    case "ADD": {
      const product = action.payload;

      const existingItem = cart.find(item => item.id === product.id);

      
      if (existingItem) {
        return cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      
      return [...cart, { ...product, quantity: 1 }];
    }

    case "INCREASE":
      return cart.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return cart
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE":
      return cart.filter(item => item.id !== action.payload);

    default:
      return cart;
  }
}


function useCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return { cart, addToCart, increase, decrease, remove };
}

export default useCart;
