import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//个人组件
import PersonalInfo from './PersonalInfo'; //账号信息
import Feedback from './Feedback'; //反馈与体验
import Identity from './Identity'; //集体账户
import MyCreate from './MyCreate'; //创建活动tab管理
import MyFollow from './MyFollow'; //收藏活动tab
import MyJoin from './MyJoin'; //报名活动tab
import MyTeam from './MyTeam'; //集体账户tab管理

// import SplitButton from './SplitButton'; //按钮组
import TeamDetails from './TeamDetails';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

class UserCenter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    })
  }

  render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}>

        <AppBar position="static" color="default">

          <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto">
            <Tab label="账号信息" id='tab-0'/>
            <Tab label="集体账户" id='tab-1' />
            <Tab label="我报名的活动" id='tab-2' />
            <Tab label="我收藏的活动" id='tab-3' />
            <Tab label="我创建的活动" id='tab-4' />
            <Tab label="体验与反馈" id='tab-5' />
          </Tabs>

        </AppBar>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 0} id='tabpanel-0'>
          <Box p={3}>
            <PersonalInfo/>
          </Box>
        </Typography>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 1} id='tabpanel-1'>
          <Box p={3}>
            {/*<MyTeam/>*/}
            <TeamDetails/>
          </Box>
        </Typography>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 2} id='tabpanel-2'>
          <Box p={3}>
            <MyJoin/>
          </Box>
        </Typography>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 3} id='tabpanel-3'>
          <Box p={3}>
            <MyFollow/>
          </Box>
        </Typography>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 4} id='tabpanel-4'>
          <Box p={3}>
            <MyCreate/>
          </Box>
        </Typography>

        <Typography component="div" role="tabpanel" hidden={this.state.value !== 5} id='tabpanel-5'>
          <Box p={3}>
            <Feedback/>
          </Box>
        </Typography>

      </div>
    );
  }
}

export default withStyles(styles)(UserCenter);
