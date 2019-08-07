import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonalInformation from './PersonalInformation'; //账号信息
import ActivityDisplay from '../activity/ActivityDisplay'; //活动展示
import activities from '../activity/TotalData'; //活动信息
import Feedback from './Feedback'; //反馈与体验
import Identity from './Identity'; //集体账户

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  // children: PropTypes.array.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="账号信息" {...a11yProps(0)} />
          <Tab label="集体账户" {...a11yProps(1)} />
          <Tab label="我报名的活动" {...a11yProps(2)} />
          <Tab label="我收藏的活动" {...a11yProps(3)} />
          <Tab label="我创建的活动" {...a11yProps(4)} />
          <Tab label="体验与反馈" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PersonalInformation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Identity/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ActivityDisplay activities={activities.slice(0,6)}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ActivityDisplay activities={activities.slice(0,6)}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ActivityDisplay activities={activities.slice(0,6)}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Feedback/>
      </TabPanel>
    </div>
  );
}
