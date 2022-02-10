import React, { Component } from 'react'

export default class TickerComponent extends Component {

    state = {
        tickerCount: 0
    }

    componentDidMount() {
        console.log("cDM called")
        this.timer = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({
            tickerCount: this.state.tickerCount + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Ticker Component - Class State</h3>
                <br />
                <br />
                Time Elapsed :{this.state.tickerCount}
                <br />
                <br />
                <br />
            </div>
        )
    }
}
