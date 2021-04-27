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

export async function getMultipleRandomQuote() {}
