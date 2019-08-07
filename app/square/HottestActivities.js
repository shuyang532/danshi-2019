import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SquareActivities from './SquareActivities'
import IrregularActivities from './IrregularActivities'

const styles = {
    title: {
        color: 'GREY'
    },
    root: {
        display:'flex',
    },
    paper: {
        textAlign: 'center',
    },
    item:{
        marginLeft:30,
    }
};

class HottestActivities extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1 className={classes.title}>最热活动</h1>
                <div className={classes.root}>
                    <div><IrregularActivities/></div>
                    <div className={classes.item}><SquareActivities/></div>
                </div>
            </div>
        );
    }
}

HottestActivities.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HottestActivities);