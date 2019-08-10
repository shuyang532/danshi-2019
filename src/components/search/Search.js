import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import cookie from 'react-cookies';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import ActivityDisplay from '../activity/ActivityDisplay'; //活动浏览页（搜索）

import { createHashHistory } from 'history'
const history = createHashHistory();


const styles = (theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
})

class Search extends Component{
  constructor() {
    super();
    this.state = {
      keyword: '',
      activitiesList: [],
      isSecond: false,
    }
  }

  componentDidMount() {
    this.setState({
      keyword: this.props.location.search.slice(5),
    })
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
        params: {
          userId: userId,
          keyword: this.state.keyword,
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

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleEnterSearch = (e) => {
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像(回车事件)
      history.push({
        pathname: '/search',
        search: '?key=' + this.state.keyword
      })
      this.handleSearch();
    }
  }

  handleClickSearch = (e) => {
    history.push({
      pathname: '/search',
      search: '?key=' + this.state.keyword
    })
    this.handleSearch();
  }

  handleSearch = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
        params: {
          userId: userId,
          keyword: this.state.keyword,
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
    const {classes} = this.props;

    return (
      <div>

        <Paper className={classes.root}>
          <InputBase className={classes.input} placeholder="根据活动名称搜索活动..." onChange={(e) => this.handleChange('keyword', e)} onKeyPress={(e) => this.handleEnterSearch(e)}/>
        <IconButton className={classes.iconButton} onClick={(e) => this.handleClickSearch(e)}><SearchIcon /></IconButton>
        </Paper>

        <ActivityDisplay activities={this.state.activitiesList}/>
      </div>
    );

  }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
