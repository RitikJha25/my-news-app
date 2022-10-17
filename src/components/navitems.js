import React, { Component } from "react";

export default class Navitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: this.props.author,
            description: this.props.description,
            title: this.props.title,
            url: this.props.url,
            imgUrl: this.props.imgUrl,
            publishedAt: this.props.publishedAt,

        };
    }
  render() {
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={this.state.imgUrl} style={{maxHeight: "200px"}} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">
              {this.state.description}
            </p>
            <a href={this.state.url} className="btn btn-primary">
        Read More
            </a>
            <p className="text-right">
                Published At: {this.props.publishedAt}
            </p>
          </div>
        </div>
      </>
    );
  }
}
