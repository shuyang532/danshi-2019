import React from "react";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const styles = () => ({
    clock:{
        textAlign:'right',
        fontSize:40,
        fontWeight:10,
    }
});

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        const {classes} = this.props;
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
        let am = hour<12? "AM":"PM";
        hour = hour <12? hour:hour-12;
        minute = minute<10? "0"+minute:minute;
        return (
            <h1 className={classes.clock}>{hour}{":"}{minute}{" "}<small>{am}</small></h1>
        );
    }
}
Clock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clock);