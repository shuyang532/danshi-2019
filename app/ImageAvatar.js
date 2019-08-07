import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import cookie from 'react-cookies';

const styles = {
    nickName: {
        fontSize: 20,
    },
    root: {
        height: 150,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E6E2E2',
    },
    name: {
        textAlign: 'center',
    },
    avatar: {
        marginLeft: 20,
        margin: 10,
        width: 80,
        height: 80,
    },
    link: {
        textDecoration: 'none',
        fontSize: 20,
        color: '#2E9AFE',
    },
    hr:{
        height:1,
        width: 180,
        margin:'auto',
        backgroundColor: 'GREY'
    }
};

function ImageAvatars(props) {
    const {classes} = props;
    function handle_loginOut() {
        cookie.remove("username");
        alert("登出成功");
    }
    return (
        <div>
            <div className={classes.root}>
                <Avatar
                    alt="photo"
                    src={require('../pictures/avatar.jpeg')}
                    className={classes.avatar}
                />
                <div className={classes.name}>
                    <label className={classes.nickName}>polar</label>
                    <br/>
                    <a className={classes.link} onClick={handle_loginOut} >退出登录</a>
                </div>
            </div>
            <div className={classes.hr}></div>
        </div>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);