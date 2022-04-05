import axios from "axios";
import { createContext, useContext, useState, useReducer } from "react";
import { wishlistReducer } from "reducer/wishlist-reducer";
import { useToast } from "./toast-context";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishCount, setWishCount] = useState(0);
  const [wishlistState, wishDispatch] = useReducer(wishlistReducer, {
    wishlistData: [],
  });
  const { setToastVal } = useToast();

  const addToWishlistHandler = async (item) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "api/user/wishlist",
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
        setWishCount((count) => count + 1);
        setToastVal((prevVal) => ({
          ...prevVal,
          bg: "purple",
          isOpen: true,
          msg: "Successfully added to Wishlist",
        }));
        setTimeout(
          () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
          1500
        );
        wishDispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromWishlistHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setWishCount((count) => count - 1);
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Successfully removed from wishlist",
          isOpen: true,
          bg: "red",
        }));
        setTimeout(
          () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
          1500
        );
        wishDispatch({
          type: "SET_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishCount,
        wishlistState,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
