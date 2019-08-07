import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ActivityDisplaySmall from './ActivityDisplaySmall';

const styles = {
    root:{
        width:580,
    },
    item:{
        float:'left',
        margin:5,
    }
};


class SquareActivities extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/guanghuadoor.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"} /></div>
                <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/book.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"}/></div>
                <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/building.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"}/></div>
                <div className={classes.item}><ActivityDisplaySmall src={require('../../pictures/activities/book.jpeg')} num={31} activity={'晨读'} company={"复旦大学文学社"}/></div>
            </div>
        );
    }
}

SquareActivities.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SquareActivities);