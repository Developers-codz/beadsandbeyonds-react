import "./App.css";
import { Navbar, Footer, Aside } from "./component";
import { Home } from "./pages/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
