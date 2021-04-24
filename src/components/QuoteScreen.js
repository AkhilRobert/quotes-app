import styles from "../styles/quote_screen.module.css";

function QuoteScreen(props) {
    return (
        <div className={styles.quote}>
            <div className={styles.quote__wrapper}>
                <div className={styles.quote__line}></div>
                <h1 className={styles.quote__text}>{props.text}</h1>
            </div>
        </div>
    );
}

export default QuoteScreen;
