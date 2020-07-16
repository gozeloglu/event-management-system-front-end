import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class Events extends Component {

    render() {
        const {eventName, address, eventDetails, registrationDeadline, startDate, startTime, endDate, endTime} = this.props;
        return (<>
            <div>
                <Card
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <Card.Header>{address}</Card.Header>
                        <Card.Text>{eventDetails}</Card.Text>
                        <Card.Footer>Registration Deadline: {registrationDeadline}</Card.Footer>
                        <Card.Footer>Start Date: {startDate} - {startTime}</Card.Footer>
                        <Card.Footer>End Date: {endDate} - {endTime}</Card.Footer>
                        <button onClick={() => alert("Update")}>Update
                        </button>
                        <button onClick={() => alert("Delete")}>Delete</button>
                    </Card.Body>
                </Card>
                <hr></hr>
            </div>
        </>);
    }
}

export default Events;