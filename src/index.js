import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AsideProvider } from "./context/aside-context";
import { ProductProvider } from "context/product-context";
import { WishlistProvider } from "context/wishlist-context";
import { AuthProvider } from "context/auth-context";
import { CartProvider } from "context/cart-context";
import { ToastProvider } from "context/toast-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <ProductProvider>
                <AsideProvider>
                  <App />
                </AsideProvider>
              </ProductProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
