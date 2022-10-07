import { Component } from "react";

// props usage within CLASS COMPONENT
class Medication extends Component {
    render() {
        return (
            <>
                <h1>Medical Information</h1>
                <p>Medicine : {this.props.medicine}</p>
                <p>Dose : {this.props.dose} </p>
            </>
        )
    }

}

export default Medication;