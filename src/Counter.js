// State usage in CLASS COMPONENT
import { Component } from "react";
class Counter extends Component {

    constructor(){
        super();
        this.state= {
            counter: 0,
        }
    }

    // Increment function button
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render(){
        return (
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>Clicked</button>
            </>
        );
    }
}
 
export default Counter;