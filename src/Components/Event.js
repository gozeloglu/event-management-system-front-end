import React, {Component} from "react";
import Events from "./Events";

class Event extends Component {

    render() {
        const {events} = this.props
        return (
            <div>
                {
                    events.map(event => {
                        return (
                            <Events
                                key={event.id}
                                eventName={event.eventName}
                                address={event.address}
                                eventDetails={event.eventDetails}
                                registrationDeadline={event.registrationDeadline}
                                startDate = {event.startDate}
                                endDate = {event.endDate}
                                startTime={event.startTime}
                                endTime={event.endTime}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Event;