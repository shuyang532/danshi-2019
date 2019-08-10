import React, {Component} from "react";
import LoginBefore from './LoginBefore'; //登录前
import LoginAfter from './LoginAfter'; //登录后
import cookie from 'react-cookies';
import PropTypes from 'prop-types';

class LoginControl extends Component {
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
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      this.setState({isLoggedIn: true});
    }
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let show;
    if (isLoggedIn) {
      show = <LoginAfter onClick={this.handleLogoutClick} history ={this.props.history}/>; //已登录
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

LoginControl.propTypes = {

}


export default LoginControl;
