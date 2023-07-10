import React from "react";
import { ReactComponent as Logo } from "../../img/icons/Logo.svg";
import FooterForm from "../Forms/FooterForm/FooterForm";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav className={s.footerNavWrapper}>
        <a href="/">
          <Logo />
        </a>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              Home
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              Blog
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              About us
            </a>
          </li>

          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              Contact us
            </a>
          </li>
          <li className={s.navItem}>
            <a href="/" className={s.navLink}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
      <FooterForm />
      <div className={s.bottomFooterWrap}>
        <div className={s.contactsWrap}>
          <ul className={s.contactsList}>
            <li className={s.contactsItem}>
              <a href="/" className={s.contactsLink}>
                Finstreet 118 2561 Fintown
              </a>
            </li>
            <li className={s.contactsItem}>
              <a href="/" className={s.contactsLink}>
                Hello@finsweet.com
              </a>
            </li>
            <li className={s.contactsItem}>
              <a href="/" className={s.contactsLink}>
                020 7993 2905
              </a>
            </li>
          </ul>
        </div>
        <div className={s.footerSocialsWrap}>
          <ul className={s.socialsList}>
            <li className={s.socialsItem}>
              <a href="/" className={s.socialsLink}></a>
            </li>
            <li className={s.socialsItem}>
              <a href="/" className={s.socialsLink}></a>
            </li>
            <li className={s.socialsItem}>
              <a href="/" className={s.socialsLink}></a>
            </li>
            <li className={s.socialsItem}>
              <a href="/" className={s.socialsLink}></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
