import React, { Component } from "react";

class Article extends Component {
    render() {
        return (
            <div>
                <h3 className="articleTitle">{this.props.title}</h3>
                <p>{this.props.body}</p>
                <p className="postStats">{this.props.comments} Comments      {this.props.likes} Likes</p>
            </div>
        )
    }
}

export default Article