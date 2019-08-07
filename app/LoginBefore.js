import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Login from './Login';
import Register from './Register';
import WeChatLogin from './WeChatLogin';
import cookie from 'react-cookies';

const styles = {
    root: {
        position: 'absolute',
        top: '50%',
        left: 50,
    },
    item:{
        marginBottom:20,
    }
};

class LoginBefore extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div tabIndex={0} role="button" className={classes.root}>
                <div className={classes.item}><Login history={this.props.history}/></div>
                <div className={classes.item}><Register/></div>
                <div className={classes.item}><WeChatLogin/></div>
            </div>
        );
    }
}

LoginBefore.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginBefore);
