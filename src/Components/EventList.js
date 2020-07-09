import React, {Component} from "react";

class EventList extends Component {
    render() {
        return (
            <div className={"Event-List"}>
                <h1 style={{color:"pink"}}>Event List {this.props.name}</h1>
                <ul>
                    <li>Go Turkey</li>
                    <li>PyIstanbul</li>
                    <li>JsItanbul</li>
                </ul>
            </div>
        );
    }
}

export default EventList;