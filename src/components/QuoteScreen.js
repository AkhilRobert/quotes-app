import AuthorButton from "./AuthorButton";
import styles from "../styles/quote_screen.module.css";

function QuoteScreen(props) {
    return (
        <div className={styles.quote}>
            <div className={styles.quote__wrapper}>
                <div className={styles.quote__line} />
                <h1 className={styles.quote__text}>{props.text}</h1>
            </div>
            <AuthorButton author={"Bill Gates"} category={"Business"} />
        </div>
    );
}

export default QuoteScreen;
