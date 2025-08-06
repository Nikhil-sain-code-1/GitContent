import React, { Component } from 'react'
import Counter from './Component/Counter';

export default class Lifecycle extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        console.log('ComponentDidMount: When component render first time');

    }

    render() {

        return (
            <div>
                <Counter number={this.state.count} ></Counter>
                <button onClick={()=>{this.increment()}} >Add</button>

            </div>
        )
    }
}
