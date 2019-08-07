import React, {Component} from "react";
import axios from 'axios';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';

class LoginAfter extends Component{
  constructor() {
    super()
    this.state = {
      userId: '',
      avatar: '',
      nickname: '',
      result: '',
      message: '',
    }
  }

  componentDidMount() {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user', {
        params: {
          userId: userId,
        }
      }).then((res) => { //res.data
        this.setState({
          userId: userId,
          avatar: res.data.avatar,
          nickname: res.data.nickname,
        })
      }).catch((err) => {
        alert('读取个人信息出现问题');
      })
    }
  }

  handleLoginOut = () => {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/logout', {
      params: {}
    }).then((res) => { //res.data
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        cookie.remove("userId");
        alert("登出成功");
        alert("(测试读取，使用时应删除)" + this.state.message);
        this.props.onClick();
        this.props.history.push('/')
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('登出读取出现问题');
    })
  }

  render(){
    return(
      <HashRouter>
      <List>
        <ListItem>
          <ListItemAvatar><Avatar alt='头像' src={this.state.avatar}/></ListItemAvatar>
          <ListItemText primary={this.state.nickname}/>
        </ListItem>

        <ListItem button component={Link} to={'/usercenter'}>
          <ListItemText primary={'个人主页'} />
        </ListItem>

        <ListItem button onClick={this.handleLoginOut}>
          <ListItemText primary={'退出账号'} />
        </ListItem>
      </List>
      </HashRouter>
    );
  }
}

LoginAfter.propTypes = {
    // classes: PropTypes.object.isRequired,
}

export default withRouter(LoginAfter);
