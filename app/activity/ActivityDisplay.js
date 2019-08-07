import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SingleActivityDisplay from "./SingleActivityDisplay";

const styles = {
    root: {},
    item: {
        marginRight: 14,
        marginTop: 20,
        float: 'left'
    },
    clear: {
        clear: 'both',
    }

};

class ActivityDisplay extends React.Component {

    render() {
        const {activities} = this.props;
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {activities.map(activity => (
                    <div className={classes.item}>
                        <SingleActivityDisplay activity={activity}/>
                    </div>
                ))}
                <div className={classes.clear}></div>
            </div>
        );
    }
}

ActivityDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityDisplay);