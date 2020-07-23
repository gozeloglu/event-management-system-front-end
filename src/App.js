import React, {Component} from 'react';
import './App.css';
import Title from "./Components/Title";
import Button from "@material-ui/core/Button";
import PlusIcon from '@material-ui/icons/Add';
import MaterialTableDemo from "./Components/MeetupList";
import SnackbarComponent from "./Components/Snackbar";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Title/>
                <div>
                    <Button variant={"contained"}
                            color={"primary"}
                            style={{float: "right"}}
                            onClick={() => {
                            }}
                            startIcon={<PlusIcon/>}
                    >
                        Add New Meetup</Button>
                </div>
                <SnackbarComponent variant={"error"} message={"Error Message"}/>
                <MaterialTableDemo/>

            </div>
        );
    }
}

export default App;
