import React, {Component} from "react";
import {withStyles,fade} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import cookie from 'react-cookies';
//我的组件
import Footer from './Footer'; //版权所有
import PaperSheet from './board/PaperSheet'; //公告板
import SlideShow from './swiper/SlideShow'; //活动轮播
import Activity from './activity/Activity'; //活动广场
import SingleActivityInfo from './activity/SingleActivityInfo'; //活动详情
import UserCenter from './user/UserCenter'; //个人主页
import LoginControl from './login/LoginControl';

const drawerWidth = 200;

const styles = (theme) => ({
  root: {
    display: 'flex', //flex 弹性盒子布局
    flexGrow: 1, //定义项目的放大比例 等分
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      urlocator: '/loginbefore',
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleDrawerClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <HashRouter>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
          <Toolbar>

            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerOpen} edge="start" className={clsx(classes.menuButton, this.state.open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              旦事-danshi
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="搜索活动…" classes={{root: classes.inputRoot,input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }}/>
            </div>

          </Toolbar>
        </AppBar>

        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={this.state.open} classes={{paper: classes.drawerPaper,}} onClick={this.handleDrawerClose}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <List>
            <ListItem button component={Link} to={'/slideshow'}>
              <ListItemText primary="热门活动" />
            </ListItem>
            <ListItem button component={Link} to={'./activity'}>
              <ListItemText primary="活动广场" />
            </ListItem>
            <ListItem button component={Link} to={'/papersheet'}>
              <ListItemText primary="公告板"/>
            </ListItem>
          </List>

          <Divider />

          <LoginControl/>

        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Switch>
            <Route path= {'/'} exact={true} component={PaperSheet}></Route>
            <Route path= {'/papersheet'} component={PaperSheet}/>
            <Route path= {'/slideshow'} component={SlideShow}/>
            <Route path= {'/activity'} component={Activity}/>
            <Route path= {'/singleActivityInfo'} component={SingleActivityInfo}/>
            <Route path= {'/userCenter'} component={UserCenter}/>
          </Switch>

          <Footer/>
        </main>
      </div>
      </HashRouter>
    );
  }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigation);
