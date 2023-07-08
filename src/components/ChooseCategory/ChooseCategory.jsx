import PropTypes from "react";
import s from "./ChooseCategory.module.css";

const ChooseCategory = () => {
  return (
    <>
      <h2 className={s.title}>Choose A Category</h2>
      <ul className={s.listCategory}>
        <li className={s.itemCategory}>
          <a href="/" className={s.linkCategory}>
            <h3 className={s.titleCategory}>Business</h3>
            <p className={s.textCategory}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </a>
        </li>
        <li className={s.itemCategory}>
          <a href="/" className={s.linkCategory}>
            <h3 className={s.titleCategory}>Startup</h3>
            <p className={s.textCategory}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </a>
        </li>
        <li className={s.itemCategory}>
          <a href="/" className={s.linkCategory}>
            <h3 className={s.titleCategory}>Economy</h3>
            <p className={s.textCategory}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </a>
        </li>
        <li className={s.itemCategory}>
          <a href="/" className={s.linkCategory}>
            <h3 className={s.titleCategory}>Technology</h3>
            <p className={s.textCategory}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </a>
        </li>
      </ul>
    </>
  );
};
export default ChooseCategory;
