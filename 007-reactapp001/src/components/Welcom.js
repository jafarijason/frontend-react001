import React, { Component } from "react";

export default class Welcome extends Component {
    render() {
         
        const name = "You"
        return <h2>Hello {this.props.name}</h2>;
    }
}

