import "./App.css";
import { Navbar, Footer, Carousel, Aside, Category } from "./component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aside />
      <main>
        <Carousel />
        <Category />
      </main>
      <Footer />
    </div>
  );
}

export default App;
