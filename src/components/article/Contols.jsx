import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ topic, onTopicChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='article-topic'>Article Topic</label>
        <input 
        id='article-topic'
        type='text'
        value={topic}
        onChange={onTopicChange}
        />
        <button aria-label='find-article'>Search</button>
    </form>
);

Controls.propTypes = {
    topic: PropTypes.string.isRequired,
    onTopicChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Controls;