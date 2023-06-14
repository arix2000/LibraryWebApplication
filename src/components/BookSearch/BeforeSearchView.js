import ReactTypingEffect from "react-typing-effect";
import styles from "../styles/beforeSearch.module.css"

export default function BeforeSearchView() {
  return (
    <div className={styles.container}>
      <ReactTypingEffect text={"Start typing..."} eraseDelay={300} eraseSpeed={20} typingDelay={200}/>
    </div>
  );
}
