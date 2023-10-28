import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import newspaper from './Newspaper.jpg'
import PropTypes from 'prop-types'


export class News extends Component {
    defaultImage = {newspaper}
    static defaultProps={
        country:'in',
        category:'general',
        pageSize:6
    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
    }
    constructor(props) {
        super(props)
        this.state = { articles: [],
             loading: false, page: 1, }
        document.title=`${this.props.category} - NewsMonkey`
    }
    async componentDidMount() {
      this.updateNews()
    }
    handleNext = async () => {
       this.setState({page:this.state.page+1})
       this.updateNews()
    }
    handlePrev = async () => {
       this.setState({page:this.state.page-1})
       this.updateNews()
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9483b37dca6648419ec311361f42c190&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
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
                }}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="cards" key={element.url}>
                            <NewsItem title={element.title?element.title:"No title"} desc={!element ? (element.description.slice(0, 88) + "..." ): ""} imageUrl={element? element.urlToImage : this.defaultImage} newsUrl={element.url} author={!element.author?"Unknown":element.author} time={new Date(element.publishedAt).toUTCString()} source={element.source.name}></NewsItem>
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