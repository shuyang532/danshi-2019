import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright'
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Activity from './activity/Activity'
import LoginAfter from './LoginAfter'
import LoginBefore from './LoginBefore'
import Square from './square/Square'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import UserCenter from './UserCenter'
import Redirect from "react-router-dom/es/Redirect";
import cookie from 'react-cookies';

const drawerWidth = 220;

// noinspection JSAnnotator
const styles = theme => ({
    menuButton: {
        //top: 2,
        marginLeft: 12,
        marginRight: 20,
    },
    menuIcon: {
        fontSize: 35,
    },
    search: {
        backgroundColor: '#58ACFA',
        type: 'text',
        height: 45,
        width: '17%',
        borderRadius: 10,
        position: 'absolute',
        right: 20,
        top: 6,
        fontSize: 20,
        border: '0',
        outline: 'none',
    },
    miniTitle: {
        color: "inherit",
        fontSize: 28,
        fontFamily: 'Helvetica Neue Helvetica Arial sans-serif',
        marginLeft: '2%',
        //marginTop:1,
        borderRadius: 20,
    },
    title: {
        variant: "title",
        color: "inherit",
        fontSize: 40,
        fontFamily: 'Helvetica Neue Helvetica Arial sans-serif',
        //paddingTop: 1
    },
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        //overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        height: 60,
        backgroundColor: '#0080FF',
        zIndex: theme.zIndex.drawer + 100,
        position: "fixed"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#E6E2E2',
    },
    content: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.default,
        //paddingTop: theme.spacing.unit * 5,
        paddingTop:100,
        paddingLeft: theme.spacing.unit,
        minWidth: 0, // So the Typography noWrap works
    },
    //toolbar: theme.mixins.toolbar,
    com:{
        width:'100%',
    }
});

class ClippedDrawer extends React.Component {
    state = {
        left: false,
        login:false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <HashRouter>
                <div className={classes.root}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.com}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.toggleDrawer(true)}
                                className={classes.menuButton}
                            >
                                <MenuIcon className={classes.menuIcon}/>
                            </IconButton>

                            <Typography className={classes.title}>
                                旦事
                            </Typography>

                            <Button className={classes.miniTitle} component={Link} to={'/square'}>广场</Button>
                            <Button className={classes.miniTitle} component={Link} to={'/activity'}>活动</Button>
                            <input
                                className={classes.search}
                                placeholder="    搜索活动……"
                                />
                        </Toolbar>
                    </AppBar>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}
                            classes={{paper: classes.drawerPaper}}>
                        <LoginAfter callBack={this.toggleDrawer}/>
                        {/*<LoginBefore/>*/}
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Switch>
                            <Route path='/square' component={Square}/>
                            <Route path='/activity' component={Activity}/>
                            <Route path="/userCenter/:name" component={UserCenter}/>
                        </Switch>
                        <Copyright/>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
