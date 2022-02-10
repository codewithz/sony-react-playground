import React, { Component } from 'react'

export default class CompanyComponent extends Component {

    state = {
        company: 'Sony Entertainment',
        countryOfOrigin: 'Japan'
    }

    changeCompany = () => {
        alert("I am clicked")
        this.setState(
            {
                company: 'Sony Entertainment Pvt Ltd'
            }
        )
    }
    render() {
        return (
            <div>
                <h3> CompanyComponent- State from Class</h3>
                <br></br>
                Company Name: {this.state.company}
                <br /><br />
                Country of Origin: {this.state.countryOfOrigin}
                <br /><br />
                <button onClick={this.changeCompany}>Change</button>
            </div>
        )
    }
}
