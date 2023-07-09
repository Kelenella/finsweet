import React from "react";
// import PropTypes from "prop-types";
import Button from "../../Button/Button";
import s from "./FooterForm.module.css";

const FooterForm = () => {
  return (
    <div className={s.footerFormWrap}>
      <p className={s.footerFormText}>
        Subscribe to our news letter to get latest updates and news
      </p>
      <form className={s.footerForm}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className={s.footerInput}
        />
        <Button type="Submit" text="Subscribe" />
      </form>
    </div>
  );
};

export default FooterForm;
