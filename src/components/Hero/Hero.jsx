import PropTypes from "prop-types";
import Button from "../Button/Button";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <p>
        Posted on <span>startup</span>
      </p>
      <h1>Step-by-step guide to choosing great font pairs</h1>
      <p>
        By <span>James West</span> | May 23, 2022{" "}
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <Button text={"Read More >"} type={Button} />
    </>
  );
};

export default Hero;
