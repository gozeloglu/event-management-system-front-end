import React, {Component} from 'react';
import PaginationTable from "./Components/PaginationTable";
import Button from "@material-ui/core/Button";
import PlusIcon from '@material-ui/icons/Add';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import ReactDialog from "./Components/ReactDialog";
import Title from "./Components/Title";
import axios from 'axios';

class App extends Component {

    meetupDialogFields = [
        {id: "meetupID", label: "Meetup ID", type: "text"},
        {id: "meetupName", label: "Meetup Name", type: "text"},
        {id: "details", label: "Details", type: "text"},
        {id: "address", label: "Address", type: "text"},
        {id: "placeName", label: "Place Name", type: "text"},
        {id: "startDate", label: "Start Date", type: "date"},
        {id: "endDate", label: "End Date", type: "date"},
        {id: "quota", label: "Quota", type: "numeric"},
        {id: "registeredUserCount", label: "Registered User Count", type: "numeric"},
    ]

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            addMeetupModalOpen: false,
            updateMeetupModalOpen: false,
            snackbarProperties: {
                isOpen: false,
                message: "",
                severity: ""
            }
        }
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT!\n")
        axios.get("/meetups")
            .then(response => {
                console.log("HERE")
                console.log(response.data)
                this.setState({rows: response.data})
            })
    }

    toggleAddMeetupModal = () => {
        this.setState({addMeetupModalOpen: !this.state.addMeetupModalOpen})
    }

    toggleUpdateMeetupModal = () => {
        this.setState({updateMeetupModalOpen: !this.state.updateMeetupModalOpen})
    }

    submitMeetupAdd = (newMeetupData) => {
        this.toggleAddMeetupModal()
        axios.post("/meetups/create-new-meetup", newMeetupData)
            .then(response => {
                this.setState(prevState => (
                    {
                        rows: [...prevState.rows, response.data]
                    }
                ));
                this.snackbarOpen("Meetup has been added successfully!", "success")
            })
            .catch(error => {
                if (error.response.status === 400) {
                    this.snackbarOpen(error.response.data.errors[0].defaultMessage, "error")
                } else if (error.response.status === 500) {
                    this.snackbarOpen("You cannot add an existing meetup!", "error")
                }
                console.log(error.response)
            })
    }

    snackbarOpen = (message, severity) => {
        console.log(message, severity);
        this.setState(prevState => {
            let snackbarProperties = {...prevState.snackbarProperties}
            snackbarProperties.isOpen = true;
            snackbarProperties.message = message;
            snackbarProperties.severity = severity;
            return {snackbarProperties};
        })
    }

    snackbarClose = () => {
        this.setState(prevState => {
            let snackbarProperties = {...prevState.snackbarProperties}
            snackbarProperties.isOpen = false;
            snackbarProperties.message = "";
            snackbarProperties.severity = "";
            return {snackbarProperties};
        })
    }

    onDeleteMeetup = (meetupID) => {
        axios.delete("/meetups/delete-meetup/" + meetupID)
            .then(response => {
                this.setState({
                    rows: this.state.rows.filter((meetup) => meetup.meetupID !== meetupID)
                })
                this.snackbarOpen("Meetup number with " + meetupID + " has been deleted successfully!", "success")
            })
    }


    onUpdateMeetup = (data) => {
        axios.put("/meetups/update-meetup/" + 12346, data)
            .then(response => {
                console.log(response.data)
                console.log("Updated successfully!")
            })
            .catch(error => {
                if (error.response.status === 400) {
                    this.snackbarOpen(error.response.data.errors[0].defaultMessage, "error")
                }
                console.log(error.response)
            })
    }


    render() {
        return (
            <div className="App">
                <Title/>
                <div>
                    <Button variant={"contained"}
                            color={"primary"}
                            style={{float: "right"}}
                            onClick={() => {
                                this.toggleAddMeetupModal()
                            }}
                            startIcon={<PlusIcon/>}
                    >
                        Add New Meetup</Button>
                </div>
                <Snackbar open={this.state.snackbarProperties.isOpen} autoHideDuration={3000}
                          onClose={this.snackbarClose}
                          anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                    <Alert onClose={this.snackbarClose} severity={this.state.snackbarProperties.severity}>
                        {this.state.snackbarProperties.message}
                    </Alert>
                </Snackbar>
                <ReactDialog fields={this.meetupDialogFields} title="Add New Meetup"
                             isOpen={this.state.addMeetupModalOpen} onClose={this.toggleAddMeetupModal}
                             onSubmit={this.submitMeetupAdd}/>

                <ReactDialog fields={this.meetupDialogFields} title="Update Meetup"
                             isOpen={this.state.updateMeetupModalOpen} onClose={this.toggleUpdateMeetupModal}
                             onSubmit={this.submitMeetupAdd}/>

                <PaginationTable rows={this.state.rows} onClick={this.toggleAddMeetupModal} onUpdate={this.onUpdateMeetup} onDelete={this.onDeleteMeetup}
                                 submitMeetupAdd={this.submitMeetupAdd}/>
            </div>
        );
    }
}

export default App;