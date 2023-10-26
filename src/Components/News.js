import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import newspaper from './Newspaper.jpg'

export class News extends Component {
    defaultImage = {newspaper}
    constructor() {
        super()
        this.state = { articles: [], loading: false, page: 1, }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5a56c4292be3497aa6111778fcd39e80&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5a56c4292be3497aa6111778fcd39e80&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                loading: false,
                page: this.state.page + 1
            })
        }

    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5a56c4292be3497aa6111778fcd39e80&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        this.setState({})
    }
    
    render() {
        return (
            <div>
                <h2 className='mx-1 text-center'>
                    News Highlights</h2>
                    {this.state.loading && <Spinner />}
                <div className="container" style={{
                    display: 'grid',
                    gap: '30px 30px',
                    gridTemplateColumns: 'auto auto auto',
                    padding: '9px'
                }}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="cards" key={element.url}>
                            <NewsItem title={element.title} desc={!element ? element.description.slice(0, 88) + "..." : ""} imageUrl={element ? element.urlToImage : this.defaultImage} newsUrl={element.url}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-evenly">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-primary mx-3 my-5" onClick={this.handlePrev}>&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-primary mx-3 my-5" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News