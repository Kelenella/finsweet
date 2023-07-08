import PropTypes from "prop-types";
import s from "./ListOfAuthors.module.css";

const ListOfAuthors = () => {
  return (
    <>
      <h2 className={s.title}>List of Authors</h2>
      <ul className={s.listAuthors}>
        <li className={s.itemAuthors}>
          <div>Photo</div>
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
          <div>Photo</div>
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
          <div>Photo</div>
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
          <div>Photo</div>
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
