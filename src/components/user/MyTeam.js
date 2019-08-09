import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import cookie from 'react-cookies';


import Identity from './Identity'; //我的所有集体账户信息
import ActivityDisplay from '../activity/ActivityDisplay'; //活动浏览页（某一社团）


const styles = (theme) => ({

})

class MyTeam extends Component{
  constructor() {
    super();
    this.state = {
      isTeam: false, //true表示显示社团详情
      teamId: 1, //社团ID
      activitiesList: [],
      isSecond: false,
    }
  }

  componentDidMount() {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
      params: {
        teamId: 1,
        // 其他参数默认，即不分页
      }
    }).then((res) => { //res.data
      this.setState({
        activitiesList: res.data.context,
        isSecond: true,
      })
    }).catch((err) => {
      alert('读取社团活动信息出现问题');
    })
  }

  handleTeam = (teamId) => {
    if (this.state.isTeam) {
      this.setState({
        isTeam: false,
      });
    } else {
      this.setState({
        isTeam: true,
        teamId: teamId,
      });
    }
  }

  render(){
    const isTeam = this.state.isTeam;
    let show;
    if (isTeam) {
      // 显示社团详情
      show = (
        <div>
        <Button variant="contained" color="primary" onClick={this.handleTeam}> 查看我的集体账户信息 </Button>
        <ActivityDisplay activities={this.state.activitiesList}/>
        </div>
      );
    } else {
      // 显示集体账户
      show = <Identity onClick={this.handleTeam}/>;
    }

    return (
      <div>
         {show}
      </div>
    );

  }
}

MyTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTeam);
