import { createContext, useContext, useState, useReducer } from "react";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishCount, setWishCount] = useState(0);
  const [wishList, setWishList] = useState([]);

  return (
    <WishlistContext.Provider
      value={{ wishCount, setWishCount, wishList, setWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
