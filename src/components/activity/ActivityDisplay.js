import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//我的组件：单个活动展示卡片
import SingleActivityCard from './SingleActivityCard';
// import activities from './TotalData';

const styles = () => ({
  item: {
    marginRight: 15,
    marginTop: 20,
    float: 'left'
  },
  clear: {
    clear: 'both'
  },
})

class ActivityDisplay extends React.Component {

  render() {
    const {classes} = this.props;
    const {activities} = this.props;

    return (
      <div className={classes.root}>

        {activities.map((activity,index) => (
          <div key={index} className={classes.item}>
            <SingleActivityCard activityInfo={activity}/>
          </div>
         ))}

         <div className={classes.clear}>

        </div>
      </div>
    );
  }
}

ActivityDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
    activities: PropTypes.array.isRequired,
};

export default withStyles(styles)(ActivityDisplay);
