import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class ReactDialog extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputData: {...this.props.rows},
            prevMeetupID: "",
        }
    }
    /**state = {
        inputData: {...this.props.rows},
        prevMeetupID: "",
    }**/


    handleInputChange = (event) => {
        event.persist();
        console.log(event.target);
        this.setState(prevState => {
            console.log(event.target)
            let inputData = {...prevState.inputData};
            inputData[event.target.id] = event.target.value;
            return {inputData};
        })
    }

    componentDidMount() {
        this.setState({prevMeetupID: this.state.inputData["meetupID"]})
    }

    render() {
        console.log(this.props.inputData)
//        let prevMeetupID = this.props.inputData["meetupID"];
        console.log("--------------------", this.props.isUpdate)
  //      console.log(prevMeetupID)

        return (
            <Dialog open={this.props.isOpen} onClose={this.props.onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
                <DialogContent>
                    {this.props.fields.map(field => {
                        return (
                            <TextField margin="dense" id={field.id} label={field.label} type={field.type}
                                       onChange={this.handleInputChange}/>
                        );
                    })}

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        if (this.props.isUpdate) {
                            this.props.onSubmit(this.state.inputData)
                        } else {
                            this.props.onSubmit(this.state.inputData)
                        }

                    }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default ReactDialog