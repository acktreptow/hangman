import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const RIGHT_ARM = <div className={styles.right__arm} />;
const LEFT_ARM = <div className={styles.left__arm} />;
const RIGHT_LEG = <div className={styles.right__leg} />;
const LEFT_LEG = <div className={styles.left__leg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className={styles.drawing__container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.line__one} />
      <div className={styles.line__two} />
      <div className={styles.line__three} />
      <div className={styles.line__four} />
    </div>
  );
}

export default HangmanDrawing;
