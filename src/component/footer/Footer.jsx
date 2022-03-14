import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="centered vertical-direction">
        <h2 className="mb-lg">
          Build with <span className="">&lt;/&gt;</span> by Kajal Kumari
        </h2>
        <ul className="style-list-none mb-lg">
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              href="httlps://github.com/developers-codz"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              href="https://www.linkedin.com/in/kajal-kumari-52bab41aa"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              href="https://twitter.com/Kajal3310"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </li>
        </ul>
        <small>
          © 2022 Beads&Beyonds
          <a
            className="decor-none footer-link"
            href="https://github.com/developers-codz"
          >
            Developers-codz
          </a>
        </small>
      </footer>
    </>
  );
};

export { Footer };
