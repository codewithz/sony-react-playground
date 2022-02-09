import React, { Component } from 'react'

export default class NameComponent extends Component {
    render() {
        const message = this.props.message ? this.props.message : 'Hello World';
        console.log("Props", this.props);

        const { name } = this.props;

        return (
            <div>
                <h3>Name Component - Class</h3>
                Hey my name is {name}
                <br></br>
                Message:{message}
            </div>
        )
    }
}
