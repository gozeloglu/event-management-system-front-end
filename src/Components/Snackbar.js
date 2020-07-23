import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function SnackbarFunc(props) {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant, message) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
    };

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant(props.variant, props.message)}>Show success snackbar</Button>
        </React.Fragment>
    );
}

export default function SnackbarComponent(props) {
    return (
        <SnackbarProvider maxSnack={3} autoHiddenDuration={3000}>
            <SnackbarFunc variant={props.variant} message={props.message}/>
        </SnackbarProvider>
    );
}