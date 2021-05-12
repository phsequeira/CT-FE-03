const topHeadLinesUS = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.newsapiKey}`);
    const results = await res.json();
    const arts = results.articles;
    return arts;
}

const findArticle = async (topic) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${process.env.newsapiKey}`)
    const results = await res.json();
    const arts = results.articles;
    return arts;
}
export { topHeadLinesUS, findArticle }