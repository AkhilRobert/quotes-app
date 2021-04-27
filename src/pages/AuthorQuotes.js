import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/author_quotes.module.css";
import QuoteScreen from "../components/QuoteScreen";
import { getMultipleRandomQuote } from "../services/api";

function AuthorQuotes(props) {
    const [quotes, setQuotes] = useState();
    const [authorName, setAuthorName] = useState();

    const { author } = useParams();

    useEffect(() => {
        async function fetchQuote() {
            const data = await getMultipleRandomQuote(author);
            setQuotes([...data.data]);
            setAuthorName(author);
        }
        fetchQuote();
    }, [author]);

    function getContent() {
        if (authorName && quotes) {
            return quotes.map((data) => {
                return (
                    <div className={styles.quote} key={data._id}>
                        <QuoteScreen text={data.quoteText} />
                    </div>
                );
            });
        }

        return null;
    }

    return (
        <div className={styles.content}>
            <h1>{authorName}</h1>
            <div className={styles.content__quotes}>{getContent()}</div>
        </div>
    );
}

export default AuthorQuotes;
