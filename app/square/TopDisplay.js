import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Clock from './Clock'

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    title:{
        fontSize:40,
        fontFamily:'sans-serif',
        fontWeight:10,
    }
});

function TopDisplay(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <h1 className={classes.title}>广场</h1>
                </Grid>
                <Grid item xs={6}>
                    <Clock/>
                </Grid>
            </Grid>
        </div>
    );
}

TopDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopDisplay);