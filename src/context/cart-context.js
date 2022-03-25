import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "reducer";
import axios from "axios";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartData: [],
  });
  const encodedToken = localStorage.getItem("token");
  const addToCartHandler = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product: item,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        console.log(response.data.cart);
        setCartCount((count) => count + 1);
        cartDispatch({ type: "set_to_cart", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromCartHandler = async (_id, qty) => {
    try {
      const response = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setCartCount((count) => count - qty);
        cartDispatch({ type: "set_to_cart", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const productQtyIncreaseHandler = async (_id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        setCartCount((count) => count + 1);
        cartDispatch({ type: "set_qtty", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const productQtyDecreaseHandler = async (_id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setCartCount((count) => count - 1);
        cartDispatch({ type: "set_qtty", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartState,
        cartDispatch,
        addToCartHandler,
        removeFromCartHandler,
        productQtyIncreaseHandler,
        productQtyDecreaseHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
