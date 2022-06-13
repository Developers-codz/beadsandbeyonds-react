import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { cartReducer } from "reducer";
import axios from "axios";
import { useToast } from "./toast-context";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { setToastVal } = useToast();
  const [isModalOpen, setModalOpen] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState({
    selected: false,
    discount: 0,
  });
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartData: [],cartCount:0
  });

  const addToCartHandler = async (item) => {
    const encodedToken = localStorage.getItem("token");
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
        setToastVal((prevVal) => ({
          ...prevVal,
          bg: "green",
          isOpen: true,
          msg: "Successfully Added to cart",
        }));
        setTimeout(
          () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
          1500
        );
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromCartHandler = async (_id, qty) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        // setCartCount((count) => count - qty);
        setToastVal((prevVal) => ({
          ...prevVal,
          bg: "red",
          isOpen: true,
          msg: "Successfully Removed from cart",
        }));
        setTimeout(
          () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
          1500
        );
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart ,qty:qty});
      }
    } catch (err) {
      console.log(err);
    }
  };

  const productQtyIncreaseHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
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
        cartDispatch({ type: "INCREASE_CART_ITEM", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const productQtyDecreaseHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
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
        cartDispatch({ type: "DECREASE_CART_ITEM", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const total = cartState.cartData.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  useEffect(() => {
    if (total < 1000) {
      couponDiscount.discount === 300
        ? setCouponDiscount((disc) => ({
            ...disc,
            discount: 0,
            selected: false,
          }))
        : setCouponDiscount((disc) => ({ ...disc, selected: false }));
    }
    if (total > 1000 && total < 1500) {
      couponDiscount.discount === 500
        ? setCouponDiscount((disc) => ({
            ...disc,
            discount: 0,
            selected: false,
          }))
        : setCouponDiscount((disc) => ({ ...disc, selected: false }));
    }
  }, [total]);

  const truncateCart = () =>{
    cartDispatch({type:"TRUNCATE"})
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCartHandler,
        removeFromCartHandler,
        productQtyIncreaseHandler,
        productQtyDecreaseHandler,
        isModalOpen,
        setModalOpen,
        couponDiscount,
        setCouponDiscount,
        truncateCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
