import React, { Component } from 'react';

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        this.setState({count: 0});
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                
            </div>
        )
    }
}

export default App
