import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import LatestActivities from './LatestActivities';
import SystemNotification from './SystemNotification'

const styles = {
    root: {
        display:'flex',
    },
    item:{
        marginLeft:50,
    }
};

class BottomDisplay extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div><LatestActivities/></div>
                <div className={classes.item}><SystemNotification/></div>
            </div>
        );
    }
}

BottomDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomDisplay);