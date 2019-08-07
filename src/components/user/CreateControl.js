import React, {Component} from "react";
import PropTypes from 'prop-types';

import CreateActivity from './CreateActivity'; //创建活动页面

import cookie from 'react-cookies';


class CreateControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false //未登录
    };
  }

  componentDidMount() {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
     // this.context.router.history.push('/papersheet');
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let show;
    if (isLoggedIn) {
      show = <LoginAfter onClick={this.handleLogoutClick}  history ={this.props.history}/>; //已登录
    } else {
      show = <LoginBefore onClick={this.handleLoginClick} />; //未登录
    }

    return (
      <div>
        {show}
      </div>
    );
  }
}


export default CreateControl;
