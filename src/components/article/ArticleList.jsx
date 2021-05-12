import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
    <ul aria-label = 'articles'>
        {articles.map((article) => (
            <li key={article.title}>
                <Article
                    author={article.author}
                    title={article.title}
                    description={article.description}
                    ></Article>
            </li>
        ))}
    </ul>

)

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
}

export default ArticleList;