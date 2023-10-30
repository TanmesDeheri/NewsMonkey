import { React, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

const News = (props) => {
    News.defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 6
    }
    News.propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    var [progress, setprogress] = useState(0)
    useEffect(() => {
        updateNews(props)
        // eslint-disable-next-line 
    }, [])
    const updateNews = async (props) => {
        setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`
        setLoading(true)
        setprogress(30)
        let data = await fetch(url)
        setprogress(50)
        let parsedData = await data.json()
        setprogress(80)
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        setprogress(100)
    }
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page + 1}`
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setLoading(false)
    }
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
            />
            <h2 className='mx-1 text-center' style={{ marginTop: '90px' }}>
                News Highlights</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className='container'>
                    <div className="row" >
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? (element.title.slice(0, 30) + "...") : "No title"} desc={!element ? (element.description.slice(0, 88) + "...") : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} time={new Date(element.publishedAt).toUTCString()} source={element.source.name}></NewsItem>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News