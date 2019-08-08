import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import cookie from 'react-cookies';

import ActivityDisplay from '../activity/ActivityDisplay'; //活动浏览页（收藏）


const styles = (theme) => ({

})

class MyJoin extends Component{
  constructor() {
    super();
    this.state = {
      activitiesList: [],
      isSecond: false,
    }
  }

  componentDidMount() {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
        params: {
          userId: userId,
          relation: "join",
          // 其他参数默认，即不分页
        }
      }).then((res) => { //res.data
        this.setState({
          activitiesList: res.data.context,
          isSecond: true,
        })
      }).catch((err) => {
        alert('读取活动信息出现问题');
      })
    }
  }

  render(){
    return (
      <div>
         <ActivityDisplay activities={this.state.activitiesList}/>
      </div>
    );

  }
}

MyJoin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyJoin);
