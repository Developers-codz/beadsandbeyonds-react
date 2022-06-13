import axios from "axios";
import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { wishlistReducer } from "reducer/wishlist-reducer";
import { useToast } from "./toast-context";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishDispatch] = useReducer(wishlistReducer, {
    wishlistData: [],
    wishCount: 0,
  });
  const [isDisabled,setDisabled] = useState(false)
  const { setToastVal } = useToast();

  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      (async () => {
        const encodedToken = localStorage.getItem("token");
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: encodedToken,
            },
          });
          wishDispatch({
            type: "SET_WISHLIST",
            payload: response.data.wishlist,
          });
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [encodedToken]);

  const addToWishlistHandler = async (item) => {
    const encodedToken = localStorage.getItem("token");
    const isinWish = wishlistState.wishlistData.find(wishlist => wishlist._id === item._id)

   if(isinWish){
     return;
   }
    try {
      setDisabled(true)
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
      setDisabled(false)
      if (response.status === 201) {
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
        wishDispatch({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromWishlistHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setDisabled(true)
      const response = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setDisabled(false)
      if (response.status === 200) {
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
          type: "REMOVE_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const truncateWish = () => {
    wishDispatch({ type: "TRUNCATE" });
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        addToWishlistHandler,
        removeFromWishlistHandler,
        truncateWish,
        isDisabled
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
