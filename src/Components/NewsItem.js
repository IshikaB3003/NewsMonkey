import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
        
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://cdn.benzinga.com/files/images/story/2022/11/09/disney-land-g9fd6f8df6_1920.jpg?width=1200&height=800&fit=crop"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
