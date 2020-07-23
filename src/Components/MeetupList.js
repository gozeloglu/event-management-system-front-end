import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from './TableIcons';
import Snackbar from "@material-ui/core";
import SnackbarComponent from "./Snackbar";

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            {title: 'Meetup Name', field: 'name'},
            {title: 'Details', field: 'details'},
            {title: 'Start Date', field: 'startDate', type: 'date'},    // TODO date --> numeric
            {title: 'Start Time', field: 'startTime', type: 'time'},
            {title: 'End Date', field: 'endDate', type: 'date'},
            {title: 'End Time', field: 'endTime', type: 'time'},
            {title: 'Capacity', field: 'quota', type: 'numeric'},
            /*{
                title: 'Birth Place',
                field: 'birthCity',
                lookup: {34: 'İstanbul', 63: 'Şanlıurfa'},
            },*/
        ],
        data: [
            {name: 'Mehmet', details: 'Baran', startDate: 1987, endDate: 63},
            {
                name: 'Zerya Betül',
                details: 'Baran',
                startDate: 2017,
                endDate: 34,
            },
        ],
    });

    return (
        <React.Fragment>
            <MaterialTable
                title="Meetups"
                columns={state.columns}
                data={state.data}
                icons={{
                    Edit: () => <tableIcons.Edit/>,
                    Delete: () => <tableIcons.Delete/>,
                    Search: () => <tableIcons.Search/>,
                    Clear: () => <tableIcons.Clear/>,
                    Add: () => <tableIcons.Add/>,
                    SortArrow: () => <tableIcons.SortArrow/>,
                    FirstPage: () => <tableIcons.FirstPage/>,
                    ResetSearch: () => <tableIcons.ResetSearch/>,
                    LastPage: () => <tableIcons.LastPage/>,
                    PreviousPage: () => <tableIcons.PreviousPage/>,
                    NextPage: () => <tableIcons.NextPage/>,
                    Check: () => <tableIcons.Check/>,
                }}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return {...prevState, data};
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return {...prevState, data};
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return {...prevState, data};
                                });
                            }, 600);
                        }),
                }}
            />
        </React.Fragment>

    );
}