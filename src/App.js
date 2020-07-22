import React, {Component} from 'react';
import './App.css';
import Title from "./Components/Title";
import Button from "@material-ui/core/Button";
import PlusIcon from '@material-ui/icons/Add';

const eventDetail = "We are back! this is our first event after Corona Virus. We are waiting for you!"
const startDate = "17.07.2020"
const endDate = "20.07.2020"
const startTime = "20.00"
const endTime = "10.00"
const registrationDeadline = "16.07.2020 - 23.59"


class App extends Component {

    render() {
        return (
            <div className="App">
                <Title/>
                <Button variant={"contained"}
                        color={"primary"}
                        style={{float: "right"}}
                        onClick={() => {}}
                        startIcon={<PlusIcon/>}
                >
                    Add New Meetup</Button>
            </div>
        );
    }

    deleteEvent = (id) => {
        this.setState({
            events: this.state.events.filter(event => event.id !== id)
        })
    }
}

Event.defaulProps = {
    title: "Event Manager System",
    names: ["Gökhan", "Ahmet", "Ali"]
}

export default App;
