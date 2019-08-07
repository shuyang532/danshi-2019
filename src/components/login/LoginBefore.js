import React, {Component} from "react";
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import cookie from 'react-cookies';
import EmailLogin from './EmailLogin'; //学邮登录
import WeChatLogin from './WeChatLogin'; //微信登录
import EmailRegister from './EmailRegister'; //学邮注册


class LoginBefore extends Component{
  constructor() {
    super();
  };

  render(){
    return(
      <div>
        <List>

          <EmailLogin onClick={this.props.onClick}/>
          <WeChatLogin onClick={this.props.onClick}/>
          <EmailRegister />

        </List>
      </div>
    );
  }
}

export default LoginBefore;
