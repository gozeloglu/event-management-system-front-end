import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/table';
import TableContainer from "@material-ui/core/TableContainer";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import {TablePageController} from "./TablePageController";

export default class PaginationTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,
            rows: []
        };
    }

    columns = [
        {id: "meetupID", label: "Meetup ID", minWidth: 100},
        {id: "meetupName", label: "Meetup Name", minWidth: 100},
        {id: "details", label: "Details", minWidth: 100},
        {id: "address", label: "Address", minWidth: 100},
        {id: "placeName", label: "Place Name", minWidth: 100},
        {id: "startDate", label: "Start Date", minWidth: 100},
        {id: "endDate", label: "End Date", minWidth: 100},
        {id: "quota", label: "Quota", minWidth: 100},
        {id: "registeredUserCount", label: "Registered User", minWidth: 100},
        {id: "update", label: "Update Meetup", minWidth: 100, onClick: this.props.onUpdate},
        {id: "delete", label: "Delete Meetup", minWidth: 100, onClick: this.props.onDelete},
    ];

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: event.target.value,
            page: 0
        });
    };

    render() {
        return (
          <Paper>
              <TableContainer>
                  <Table stickyHeader aria-label={"sticky table"}>
                      <TableHeader columns={this.columns}/>
                      <TableContent rows={this.props.rows} page={this.state.page} rowsPerPage={this.state.rowsPerPage}
                                    columns={this.columns}/>
                  </Table>
              </TableContainer>
              <TablePageController count={this.state.rows.length}
                                   rowsPerPage={this.state.rowsPerPage}
                                   page={this.state.page} handleChangePage={this.handleChangePage}
                                   handleChangeRowsPerPage={this.handleChangeRowsPerPage}/>
          </Paper>
        );
    }
}