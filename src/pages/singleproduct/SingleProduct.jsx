import "./singleproduct.css";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "context/product-context";
import { FastDelivery, InStock, ReturnPolicy } from "assets/icons";
import { Toast } from "component";
import { useCart } from "context/cart-context";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

export const SingleProduct = () => {
  const { productList } = useProduct();
  const param = useParams();
  const navigate = useNavigate();
  let productId = param.productId;
  const getProduct = (id) => productList.find(({ _id }) => id === _id);
  const product = getProduct(productId, 10);

  const {
    addToCartHandler,
    cartState: { cartData },
    isFetching
  } = useCart();

  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  const clickHandler = (product) => {
    const token = localStorage.getItem("token")
    if(token)
    addToCartHandler(product);
    else 
    navigate("/login")
  };

  return (
    <>
      <Toast />
      <div className="shadow-box product_wrapper">
        <div className="image_wrapper ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt:"product",
                src: product?.image,
                width: 450,
                height: 450,
              },

              largeImage: {
                src: product?.image,
                width: 1500,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "180%",
                height: "100%",
              },
            }}
            isActivatedOnTouch 
          />
        </div>
        <div className="detail_wrapper vertical-direction">
          <h1 className="text-primary">{product?.name}</h1>
          <p className="mb-lg">{product?.description}</p>
          <div className="mb-lg text-primary">
            {[...Array(5)].map((a, ind) => {
              return (
                <span key={ind}>
                  <i
                    className={
                      product?.ratings >= ind + 1
                        ? "fa fa-star fa-lg"
                        : "far fa-star fa-lg"
                    }
                  ></i>
                </span>
              );
            })}
          </div>
          <h2 className="inline-block">
            Rs. {product?.price} <small>only</small>
          </h2>{" "}
          <strike className="text-danger">₹{product?.original}</strike>
          <h3 className="text-success">({product?.discounted}% off)</h3>
          <small className="mb-lg">Inclusive of all taxes</small>
          <div className="features">
            <div className="feature">
              <FastDelivery />{" "}
              <span className="inline-block">Fast Delivery Available</span>
            </div>
            <div className="feature">
              <InStock />{" "}
              <span className="inline-block">Item Available in Stock</span>
            </div>
            <div className="feature">
              <ReturnPolicy />{" "}
              <span className="inline-block">7 days easy Return Policy</span>
            </div>
          </div>
          <div className="btn_wrapper">
            {isInCartList(product?._id) ? (
              <Link
                to="/cart"
                className="btn btn-primary btn_product_action text-secondary btn-cart decor-none"
              >
                Go to Cart
              </Link>
            ) : (
              <button
              disabled={isFetching}
                className="btn btn-primary btn_product_action text-secondary btn-cart"
                onClick={() => clickHandler(product)}
              >
                Add to cart
              </button>
            )}

            <button
              className="btn btn-outline btn_product_action"
              onClick={() => {
                if(isInCartList(product?._id)){
                  navigate("/cart");
                }
                else{
                  clickHandler(product);
                  navigate("/cart")
                }
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
