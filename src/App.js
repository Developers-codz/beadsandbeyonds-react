import "./App.css";
import { Navbar, Footer, Carousel, Aside, Category } from "./component";

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Carousel />
        <Category />
      </main>
      <Footer />
    </>
  );
}

export default App;
