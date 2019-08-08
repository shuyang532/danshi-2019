import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import cookie from 'react-cookies';

const styles = (theme) => ({
  card: {
    display: 'flex',
    padding: theme.spacing(3, 2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  button: {
    marginTop: theme.spacing(1),
    width: '30%',
  },
  cover: {
    width: '44%',
    margin: 30,
  }
})

class SingleActivityInfo extends Component {
  constructor() {
    super();
    this.state = {
      activityId: 1,
      activityInfo: '',
      isSecond: false,
      result: '',
      message: '',
    }
  }

  componentDidMount() {
    // console.log(this.props.location.query.activityId);
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
      params: {
        // activityId: this.state.activityId,
        activityId: this.props.location.query.activityId,
      }
    }).then((res) => { //res.data
      this.setState({
        activityInfo: res.data.context[0],
        isSecond: true,
      })
    }).catch((err) => {
      alert('读取活动详细信息出现问题');
    })
  }

  handleJoin = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      if (this.state.activityInfo.join) {
        //取消报名
        axios.delete('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/join', {
          data: {
            activityId: this.state.activityId,
          }
        }).then((res) => { //res.data
          this.setState({
            result: res.data.result,
            message: res.data.message,
          })
          if (this.state.result) {
            alert("活动取消报名成功~");
            alert("(测试读取，使用时应删去)" + this.state.message);
          } else {
            alert(this.state.message);
          }
        }).catch((err) => {
          alert('活动取消报名出现问题(axios跨域问题，等后端代码和并后再尝试)');
        })
      } else {
        //报名
        axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/join", {
          activityId: this.state.activityId,
        }).then((res) => {
          this.setState({
            result: res.data.result,
            message: res.data.message,
          })
          if (this.state.result) {
            alert("活动报名成功");
            alert("(测试读取，使用时应删去)" + this.state.message);
          } else {
            alert(this.state.message);
          }
        }).catch((err) => {
          alert('活动报名出现问题');
        })
      }
    }
  }

  handleFollow = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      if (this.state.activityInfo.join) {
        //取消报名
        axios.delete('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/follow', {
          data: {
            activityId: this.state.activityId,
          }
        }).then((res) => { //res.data
          this.setState({
            result: res.data.result,
            message: res.data.message,
          })
          if (this.state.result) {
            alert("活动取消收藏成功~");
            alert("(测试读取，使用时应删去)" + this.state.message);
          } else {
            alert(this.state.message);
          }
        }).catch((err) => {
          alert('活动取消收藏出现问题(axios跨域问题，等后端代码和并后再尝试)');
        })
      } else {
        //报名
        axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/follow", {
          activityId: this.state.activityId,
        }).then((res) => {
          this.setState({
            result: res.data.result,
            message: res.data.message,
          })
          if (this.state.result) {
            alert("活动收藏成功");
            alert("(测试读取，使用时应删去)" + this.state.message);
          } else {
            alert(this.state.message);
          }
        }).catch((err) => {
          alert('活动收藏出现问题');
        })
      }
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <Card className={classes.card}>

      <CardContent className={classes.content}>
      <Typography component="p" paragraph> <b>活动名称：</b>{this.state.activityInfo.name} </Typography>
      <Typography component="p" paragraph> <b>活动简介：</b>{this.state.activityInfo.description} </Typography>
      <Typography component="p" paragraph> <b>活动大类：</b>{this.state.activityInfo.typeName} </Typography>
      <Typography component="p" paragraph> <b>活动地点：</b>{this.state.activityInfo.place} </Typography>
      <Typography component="p" paragraph> <b>活动开始时间：</b>{this.state.activityInfo.startTime} </Typography>
      <Typography component="p" paragraph> <b>活动结束时间：</b>{this.state.activityInfo.endTime} </Typography>
      <Typography component="p" paragraph> <b>已报名人数：</b>{this.state.activityInfo.numberOfPeople} </Typography>
      <Typography component="p" paragraph> <b>报名人数上限：</b>{this.state.activityInfo.limitOfPeople} </Typography>
      <Typography component="p" paragraph> <b>活动发起者：</b>{this.state.activityInfo.creatorName} </Typography>
      <Typography component="p" paragraph> <b>活动发起集体：</b>{this.state.activityInfo.teamName} </Typography>
      <Typography component="p" paragraph> <b>活动可见性：</b>{this.state.activityInfo.scope} </Typography>

      <Button variant="contained" color="primary" className={classes.button} onClick={this.handleJoin}>{this.state.activityInfo.join ? '取消报名' : '报名'}</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={this.handleFollow}>{this.state.activityInfo.follow ? '取消收藏' : '收藏'}</Button>

      </CardContent>



      <CardMedia component="img" src={this.state.isSecond ? this.state.activityInfo.cover : 'http://chuantu.xyz/t6/702/1565248824x1031866013.jpg'} title="活动封面图" className={classes.cover}/>
      </Card>
    );
  }
}

SingleActivityInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleActivityInfo);
