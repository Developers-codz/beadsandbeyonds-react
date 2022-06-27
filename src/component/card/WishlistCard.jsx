import React,{useState} from 'react'
import { useWishlist } from "context/wishlist-context";
import { useCart } from "context/cart-context";
import { Link } from 'react-router-dom';

export const WishlistCard = ({item}) => {
    const [isDisabled,setDisabled] = useState(false)
    const [isCartBtnDisabled,setCartBtnDisabled] = useState(false)
    const {
      removeFromWishlistHandler,
    } = useWishlist();
    const {
        cartState: { cartData },
        addToCartHandler,
      } = useCart();
    const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
    const clickHandler = (product) => {
      addToCartHandler(product,setCartBtnDisabled);
    };
  return (
    <div className="wishlist-card" key={item._id}>
    <img
      src={item.image}
      alt={item.name}
      className="wishlist-img"
    />
    <div className="del-btn">
      <button
        disabled={isDisabled}
        className="rm-wishlist-icon"
        onClick={() => removeFromWishlistHandler(item._id,setDisabled)}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
    <h2 className="card-heading ">{item.name}</h2>
    <p className="text-secondary">{item.description}</p>
    <small className="text-success">
      <strike className="text-secondary">₹499</strike> 60% off{" "}
    </small>
    <p className="item-price font3">{item.price} only</p>
    <div className="move-to-cart-btn-wrapper">
      {isInCartList(item._id) ? (
        <Link to="/cart" className="move-to-cart-btn-wrapper">
          <button className="reset btn-to-cart">Go to cart</button>
        </Link>
      ) : (
        <button
          disabled={isCartBtnDisabled}
          className="reset btn-to-cart"
          onClick={() => clickHandler(item)}
        >
          Add to cart
        </button>
      )}
    </div>
  </div>
  )
}
