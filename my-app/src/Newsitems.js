import React, { Component } from 'react'

export class Newsitems extends Component {
   
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://sportshub.cbsistatic.com/i/r/2020/07/21/ccd468f9-3f4b-4c7b-b4a2-abb86f6c8b78/thumbnail/1200x675/ade6c711820f0074cf815c1e4897c26f/mcay.jpg":imageUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
            </div>
        )
    }
}

export default Newsitems
