import React from "react"
import newspaper from './Newspaper.jpg'
const NewsItem =(props)=> {
    let { title, desc, imageUrl, newsUrl, author, time,source } = props
    return (
      <div>
        <div className="card bg-dark text-light" style={{marginBottom:'10px'}}>
          <img src={imageUrl?imageUrl:newspaper} className="card-img-top" alt="Problem faced while loading " style={{height:'30vh'}} />
          <div className="card-body">
            <span className="badge rounded-pill bg-danger">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-muted">By:{author} Last updated {time}</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer noopener' className="btn btn-sm btn-primary">Know More</a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem