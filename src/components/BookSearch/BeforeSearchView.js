import ReactTypingEffect from "react-typing-effect";
import styles from "../styles/beforeSearch.module.css";

export default function BeforeSearchView() {
  return (
    <div className={styles.container}>
      <ReactTypingEffect
        text={[
          "Harry Potter",
          "The Lord of the Rings",
          "The Pillars of the Earth",
          "Murder on the Orient Express",
        ]}
        eraseDelay={300}
        eraseSpeed={20}
        typingDelay={200}
        speed={100}
      />
      <div className={styles.button}>Search</div>
    </div>
  );
}
