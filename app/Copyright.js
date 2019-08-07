import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    root: {
        height: 100,
        width: '100%',
        color: 'GREY',
        textAlign: 'center',
        fontSize: 10,
    },
    item:{
        paddingTop:50,
    }
});

class Copyright extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <p className={classes.item}>晨曦工作室 版权所有</p>
                <p>Copyright©2000-2018 Tencent.All Rights Reserved</p>
            </div>
        );
    }
}

Copyright.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Copyright);