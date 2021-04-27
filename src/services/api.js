async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getSingleRandomQuote() {
    const data = await getData(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );

    return data;
}

export async function getMultipleRandomQuote(author) {
    const data = await getData(
        `https://quote-garden.herokuapp.com/api/v3/quotes/?author=${escape(
            author
        )}&limit=6`
    );

    return data;
}
