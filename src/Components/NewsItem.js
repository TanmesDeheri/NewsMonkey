import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let { title, desc,imageUrl,newsUrl} = this.props
    return (
      <div>
        <div className="card bg-dark text-light" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="Problem faced while loading " />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsUrl} target='_blank' rel='noreferrer noopener' className="btn btn-sm btn-primary">Know More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem