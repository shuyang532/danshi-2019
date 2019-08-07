import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import cookie from 'react-cookies';
import LoginBefore from './LoginBefore'; //登录前
import LoginAfter from './LoginAfter'; //登录后

class LoginShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doUpdate: false
    }
  };

  // componentDidMount() {
  //
  //   console.log('ddddddddddddddddddddddddd');
  //
  //   // if (userId == null || userId == '') {
  //   //   this.props.history.push('/loginbefore');
  //   //   console.log("未登录");
  //   // } else {
  //   //   console.log("已登录");
  //   // }
  // }

  // componentDidUpdate(prevProps, prevState){
  //   let userId = cookie.load('userId');
  //   console.log(userId);
  //   console.log('fffffffffffffffffffff');
  //   if (this.state.doUpdate !== prevState.doUpdate) {
  //     this.props.updateParent('//////');
  //     console.log("传递");
  //   }
  // }
  // 
  // handleChange(){
  //   console.log('qqqqqqqqqqqqqq');
  // }
// <Route path='/path/:name' component={Path}/>
// <Link to="/path/通过通配符传参">通配符</Link>
// this.props.match.params.name
  render() {
    return(
      <HashRouter>
      <div>
        <Switch>
          <Route path='/' exact={true} component={LoginBefore}/>
          <Route path='/loginafter' component={LoginAfter}/>
          <Route path='/loginbefore' component={LoginBefore}/>
        </Switch>
      </div>
      </HashRouter>
    )
  }
}

// LoginShow.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default LoginShow;
