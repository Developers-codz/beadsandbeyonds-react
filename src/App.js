import "App.css";
import {
  Navbar,
  Footer,
  Aside,
  ProtectedRoute,
  NonAuthenticatedRoute,
} from "component";
import {
  Home,
  Product,
  Wishlist,
  Cart,
  Pagenotfound,
  Login,
  Signup,
  Profile,
} from "pages";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<NonAuthenticatedRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/mockman" element={<Mockman />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
