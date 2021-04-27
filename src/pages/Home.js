import { useState, useEffect } from "react";

import styles from "../styles/home.module.css";
import QuoteScreen from "../components/QuoteScreen";
import AuthorButton from "../components/AuthorButton";
import { getSingleRandomQuote } from "../services/api";

function Home() {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [genre, setGenre] = useState();

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const data = await getSingleRandomQuote();
        console.log(data);

        setQuote(data.data[0].quoteText);
        setAuthor(data.data[0].quoteAuthor);
        setGenre(data.data[0].quoteGenre);
    }

    return (
        <div>
            <div className={styles.random}>
                <button className={styles.random__button} onClick={fetchQuote}>
                    random <i className={"fa fa-sync-alt"} />
                </button>
            </div>
            <div className={styles.centerWrapper}>
                <QuoteScreen text={quote} />
                <AuthorButton author={author} category={genre} />
            </div>
        </div>
    );
}

export default Home;
