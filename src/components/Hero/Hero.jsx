import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <p className={s.hero_topInfo}>
        Posted on <span>startup</span>
      </p>
      <h1 className={s.titleHero}>
        Step-by-step guide to choosing great font pairs
      </h1>
      <p className={s.hero_middleInfo}>
        By <span>James West</span> | May 23, 2022
      </p>
      <p className={s.hero_bottomInfo}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <Button text="Read More >" type="button" />
    </div>
  );
};

export default Hero;
