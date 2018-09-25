import React, { Component } from 'react';


class counter extends Component {
    state = {
        count: this.props.value
    }

    increaseCount= () =>{
        var count = this.state.count;
        count= count +1;
        this.setState({count});
        
        this.state.count === 4 && this.props.onPushCounter()
    }

    resetCount = () =>{
        var count = this.state.count;
        count = 0;
        this.setState({count});
    }

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-warning m-2">{this.state.count}</button>
                    <button className="btn btn-primary m-2" onClick={this.increaseCount}>Increase</button>
                    <button className="btn btn-danger m-2" onClick={this.resetCount}>Reset Count</button>
                </div>
            </div>
        );
    }
}

 
export default counter;