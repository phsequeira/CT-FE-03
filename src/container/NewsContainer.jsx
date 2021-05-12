import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import Controls from '../components/article/Contols';
import { findArticle, topHeadLinesUS } from '../services/newsApi';


export default class TopHeadlineContainer extends Component {
    state = {
        loading: true,
        articles: [],
        topic: '',
    }

    async componentDidMount() {
        const articles = await topHeadLinesUS();
        this.setState({ 
            loading: false,
            articles,
        })
    }

    handleTopicChange = ({ target }) => {
        this.setState({ topic: target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const articles = await findArticle(this.state.topic);
        this.setState({
            loading: false,
            articles,
        })
    }

    render() {
        const { loading, articles, topic } = this.state;

        if (loading) return <h1>Loading...</h1>

        return (
            <>
            <Controls
                topic={topic}
                onTopicChange={this.handleTopicChange}
                onSubmit={this.handleSubmit}
                />
            <ArticleList articles={articles} />
            </>
        )
    }
}