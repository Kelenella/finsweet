import s from "./JoinOurTeam.module.css";

const JoinOurTeam = () => {
  return (
    <article className={s.joinBlock}>
      <h2 className={s.joinTitle}>Join our team to be a part of our story</h2>
      <p className={s.joinText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <a href="/" className={s.joinLink}>
        Join Now
      </a>
    </article>
  );
};

export default JoinOurTeam;
