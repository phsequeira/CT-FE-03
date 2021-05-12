import React from 'react';
import PropTypes from 'prop-types';


const Article = ({ author, title, description }) => (
    <>
    <p>Author: {author}</p>
    <p>Title: {title}</p>
    <p>Description: {description}</p>
    </>
);

Article.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default Article;