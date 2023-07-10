import PropTypes from "prop-types";
import Button from "../Button/Button";
import { ReactComponent as Logo } from "../../img/icons/Logo.svg";
import s from "./Header.module.css";

const Header = ({
  navLinksObj: { textHome, textBlog, textAboutUs, textContactUs },
}) => {
  return (
    <header className={s.header}>
      <a href="/">
        <Logo />
      </a>
      <nav>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              {textHome}
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              {textBlog}
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              {textAboutUs}
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              {textContactUs}
            </a>
          </li>
        </ul>
      </nav>
      <Button text="Subscribe" type="button" />
    </header>
  );
};

Header.defaultProps = {
  navLinksObj: {
    textHome: "Home",
    textBlog: "Blog",
    textAboutUs: "About Us",
    textContactUs: "Contact Us",
  },
};

Header.propTypes = {
  navLinksObj: PropTypes.shape({
    textHome: PropTypes.string,
    textBlog: PropTypes.string,
    textAboutUs: PropTypes.string,
    textContactUs: PropTypes.string,
  }),
};

export default Header;
