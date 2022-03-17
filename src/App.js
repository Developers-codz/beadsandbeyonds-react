import "App.css";
import { Navbar, Footer, Aside } from "component";
import { Home, Product } from "pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
