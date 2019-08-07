import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import HottestActivities from './HottestActivities';
import BottomDisplay from './BottomDisplay'
import TopDisplay from './TopDisplay'

const styles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

class Square extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <TopDisplay/>
                <br/>
                <br/>
                <HottestActivities/>
                <br/>
                <br/>
                <BottomDisplay/>
            </div>
        );
    }
}

Square.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Square);

