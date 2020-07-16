import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Components/Title";
import Event from './Components/Event';

const eventDetail = "We are back! this is our first event after Corona Virus. We are waiting for you!"
const startDate = "17.07.2020"
const endDate = "20.07.2020"
const startTime = "20.00"
const endTime = "10.00"
const registrationDeadline = "16.07.2020 - 23.59"


class App extends Component {

    state = {
        events: [{
            id: 1,
            eventName: "Flutter Day",
            address: "Hacettepe University CS Building Ankara/Turkey",
            eventDetails: "We are back! this is our first event after Corona Virus. We are waiting for you!",
            startDate: "17.07.2020",
            endDate: "20.07.2020",
            startTime: "20.00",
            endTime: "10.00",
            registrationDeadline: "16.07.2020 - 23.59"
        }, {
            id: 2,
            eventName: "React JS Day",
            address: "METU CS Building Ankara/Turkey",
            eventDetails: "We are back! this is our first event after Corona Virus. We are waiting for you!",
            startDate: "27.07.2021",
            endDate: "30.07.2021",
            startTime: "20.00",
            endTime: "10.00",
            registrationDeadline: "26.07.2021 - 23.59"
        },{
            id: 3,
            eventName: "React JS Day",
            address: "Sabanci CS Building Ankara/Turkey",
            eventDetails: "We are back! this is our first event after Corona Virus. We are waiting for you!",
            startDate: "27.07.2021",
            endDate: "30.07.2021",
            startTime: "20.00",
            endTime: "10.00",
            registrationDeadline: "26.07.2021 - 23.59"
        }, {
            id: 4,
            eventName: "React JS Day",
            address: "Bilkent CS Building Ankara/Turkey",
            eventDetails: "We are back! this is our first event after Corona Virus. We are waiting for you!",
            startDate: "27.07.2021",
            endDate: "30.07.2021",
            startTime: "20.00",
            endTime: "10.00",
            registrationDeadline: "26.07.2021 - 23.59"
        }, {
            id: 5,
            eventName: "React JS Day",
            address: "ITU CS Building Ankara/Turkey",
            eventDetails: "We are back! this is our first event after Corona Virus. We are waiting for you!",
            startDate: "27.07.2021",
            endDate: "30.07.2021",
            startTime: "20.00",
            endTime: "10.00",
            registrationDeadline: "26.07.2021 - 23.59"
        }]
    }

    render() {
        return (
            <div className="App">
                <Title/>
                <Event events = {this.state.events} />
            </div>
        );
    }
}

Event.defaulProps = {
    title: "Event Manager System",
    names: ["Gökhan", "Ahmet", "Ali"]
}

export default App;
