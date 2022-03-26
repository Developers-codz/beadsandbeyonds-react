import axios from "axios";
import { createContext, useContext, useState, useReducer } from "react";
import { wishlistReducer } from "reducer/wishlist-reducer";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishCount, setWishCount] = useState(0);
  const [wishlistState, wishDispatch] = useReducer(wishlistReducer, {
    wishlistData: [],
  });
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
      console.log(response.data.wishlist);
      if (response.status === 201) {
        setWishCount((count) => count + 1);
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
      console.log(response.data.wishlist);
      if (response.status === 200) {
        setWishCount((count) => count - 1);
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
