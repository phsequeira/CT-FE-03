const topHeadLinesUS = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a1169c23523b49dd918609503a5609c8');
    const results = await res.json();
    const arts = results.articles;
    return arts;
}

const findArticle = async (topic) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=a1169c23523b49dd918609503a5609c8`)
    const results = await res.json();
    const arts = results.articles;
    return arts;
}
export { topHeadLinesUS, findArticle }