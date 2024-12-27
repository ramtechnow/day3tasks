import React from "react";

import './App.css'

export default class Second extends React.Component {
    render() {
        return(
            <div className="Overall">
            <div className="Card">
                <img src={this.props.media} />
                <h1> {this.props.name} </h1>
            </div>
            </div>
        )
    }
};