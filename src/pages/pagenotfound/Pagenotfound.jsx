import { useDocumentTitle } from "hooks";
const Pagenotfound = () => {
  useDocumentTitle("Page not found");
  return (
    <h1 style={{ textAlign: "center", margin: "9rem 0rem" }}>Page Not Found</h1>
  );
};
export { Pagenotfound };
