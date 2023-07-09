import PropTypes from "prop-types";
import manYellowShirt from "../../img/pic_x1/man-in-yellow-shirt-1x.jpg";
import womanWhiteStripedShirt from "../../img/pic_x1/woman-in-white-and-black-striped-shirt-1x.jpg";
import fashionWoman from "../../img/pic_x1/fashion-woman-1x.jpg";
import contentBaker from "../../img/pic_x1/content-baker-1x.jpg";
import s from "./ListOfAuthors.module.css";

const ListOfAuthors = () => {
  return (
    <>
      <h2 className={s.title}>List of Authors</h2>
      <ul className={s.listAuthors}>
        <li className={s.itemAuthors}>
          <img
            src={manYellowShirt}
            alt="manYellowShirt"
            className={s.imgAuthor}
          />
          <h3 className={s.nameAuthor}>Floyd Miles</h3>
          <p className={s.txtAuthor}>Content Writer @Company</p>
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
        </li>
        <li className={s.itemAuthors}>
          <img
            src={womanWhiteStripedShirt}
            alt="womanWhiteStripedShirt"
            className={s.imgAuthor}
          />
          <h3 className={s.nameAuthor}>Dianne Russell</h3>
          <p className={s.txtAuthor}> Writer @Company</p>
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
        </li>
        <li className={s.itemAuthors}>
          <img src={fashionWoman} alt="fashionWoman" className={s.imgAuthor} />
          <h3 className={s.nameAuthor}>Jenny Wilson</h3>
          <p className={s.txtAuthor}>Content Writer @Company</p>
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
        </li>
        <li className={s.itemAuthors}>
          <img src={contentBaker} alt="contentBaker" className={s.imgAuthor} />
          <h3 className={s.nameAuthor}>Leslie Alexander</h3>
          <p className={s.txtAuthor}>Content Writer @Company</p>
          <ul className={s.socialsList}>
            <li className={s.socialsItem}>
              <a href="/"></a>
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
        </li>
      </ul>
    </>
  );
};

export default ListOfAuthors;
