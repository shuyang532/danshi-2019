import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ActivityDisplayBig from './ActivityDisplayBig';
import ActivityDisplaySmall from './ActivityDisplaySmall'

const styles= {
    root:{
        width: 580,
    },
    item:{
        float:'left',
        margin:5,
    }
};

function IrregularActivities(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.item}><ActivityDisplayBig src={require('../../pictures/activities/guanghuadoor.jpeg')} num={20} activity={"晨读"} company={"复旦大学"}/></div>
            <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/building.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"} /></div>
            <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/book.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"}/></div>
        </div>
    );
}

IrregularActivities.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IrregularActivities);