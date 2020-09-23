import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {theme} from "../Others/Theme";

const useStyles = makeStyles((theme) => ({
    //
}))

const CounterDemo = () => {
    const {state, actions} = useOvermind()
    const classes = useStyles();

    return (
        <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
              alignContent='center'>
            <Typography>{state.counter}</Typography>
            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.increase(1)
                }}>+</Button>
                <Button style={{margin: 8}} color='primary' variant='contained' onClick={() => {
                    actions.increase(-1)
                }}>-</Button>
            </Grid>

        </Grid>
    );
};

export default CounterDemo;
