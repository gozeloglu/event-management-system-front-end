import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class Event extends Component {
    render() {
        return (
            <div className={"col-md-8 mb-4"}>
                <div className={"card"}>
                    <div className={"card-header d-flex justify-context-between"}>
                        <h4 className={"d-inline"}>Event Name</h4>
                    </div>
                    <div className={"card-body"}>
                        <p className={"card-text"}>Start Date</p>
                        <p className={"card-text"}>End Date</p>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Event;