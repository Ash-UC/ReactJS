import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            value : 0,
            text : "Class",
        }
    }

    render() {
        return (
            <div>
                <span>{this.state.text} : {this.state.value}</span>
                <button onClick={() => this.setState({...this.state, value: this.state.value + 1})}>Increment</button>
            </div>
        )
    }
}

export default ClassComponent;
