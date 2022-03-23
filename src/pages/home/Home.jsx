import { Carousel, Category } from "component";
import { useDocumentTitle } from "hooks";
const Home = () => {
  useDocumentTitle("home page");
  return (
    <>
      <Carousel />
      <Category />
    </>
  );
};

export { Home };
