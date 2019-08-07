import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    title:{
        color:'GREY',
    },
    container: {
        width: 580,
        //maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
        borderRadius:10,
        boxShadow:'1px 1px 1px 1px #888888'
    },
});

function InsetDividers(props) {
    const {classes} = props;
    return (
        <div>
            <h1 className={classes.title}>最新活动</h1>
            <br/>
            <div className={classes.container}>
                <List>
                    <ListItem>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                        <ListItemText primary="足球比赛" secondary="复旦大学足球社"/>
                    </ListItem>
                    <li>
                        <Divider inset/>
                    </li>
                    <ListItem>
                        <Avatar>
                            <WorkIcon/>
                        </Avatar>
                        <ListItemText primary="射箭比赛" secondary="复旦大学某社团"/>
                    </ListItem>
                    <Divider inset component="li"/>
                    <ListItem>
                        <Avatar>
                            <BeachAccessIcon/>
                        </Avatar>
                        <ListItemText primary="海报制作" secondary="复旦大学学生会"/>
                    </ListItem>
                    <Divider inset component="li"/>
                    <ListItem>
                        <Avatar>
                            <BeachAccessIcon/>
                        </Avatar>
                        <ListItemText primary="旦事项目开发" secondary="复旦大学晨曦工作室"/>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}

InsetDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);