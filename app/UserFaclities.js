// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {HashRouter, Switch, Route, Link} from "react-router-dom";

const styles = {
    userCenter:{
        fontSize:20,
        padding:20,
    },
    link:{
        textDecoration : null,
    }
};

class UserFacilities extends React.Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <p className={classes.userCenter}>个人中心</p>
                <list>
                    <div>
                        <ListItem button>
                            <Link to={'/userCenter/' + '0'}><ListItemText primary="我发起的活动" /></Link>
                        </ListItem>
                        <ListItem button >
                            <Link to={'/userCenter/' + '1'}><ListItemText primary="我收藏的活动"/></Link>
                        </ListItem>
                        <ListItem button>
                            <Link to={'/userCenter/' + '2'}><ListItemText primary="我参加的活动"/></Link>
                        </ListItem>
                        <ListItem button>
                            <Link to={'/userCenter/' + '3'}><ListItemText primary="修改个人资料"/></Link>
                        </ListItem>
                        <ListItem button>
                            <Link to={'/userCenter/' + '4'}><ListItemText primary="我的集体账户"/></Link>
                        </ListItem>
                        <ListItem button>
                            <Link to={'/userCenter/' + '5'}><ListItemText primary="网站后台"/></Link>
                        </ListItem>
                    </div>
                </list>
            </div>
        );
    }
}
UserFacilities.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserFacilities);
