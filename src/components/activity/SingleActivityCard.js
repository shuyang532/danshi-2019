import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import SingleActivityInfo from './SingleActivityInfo'; //活动详细信息
import axios from 'axios';
import cookie from 'react-cookies';

const styles = () => ({
  card: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
})

class SingleActivityCard extends Component {
  constructor() {
    super();
    this.state = {
      activityId: 1,
      activityInfo:'',
      result: '',
      message: '',
    };
  }

  componentDidMount() {
    this.setState({
      activityId: this.props.activityInfo.activityId,
      activityInfo: this.props.activityInfo,
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
    const {activityInfo} = this.props;
    return (
      <Card className={classes.card}>

        <CardActionArea component={Link} to={{pathname:'/singleActivityInfo',query:{activityId:activityInfo.activityId}}}>
          <CardMedia className={classes.media} image={activityInfo.cover} title="活动简略信息"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{activityInfo.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {activityInfo.description.length>10 ? activityInfo.description.slice(0,10)+'...' : activityInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" className={classes.button} onClick={this.handleJoin}>{activityInfo.join ? '取消报名' : '报名'}</Button>
          <Button size="small" color="primary" className={classes.button} onClick={this.handleFollow}>{activityInfo.follow ? '取消收藏' : '收藏'}</Button>
          <Button size="small" color="primary" component={Link} to={{pathname:'/singleActivityInfo',query:{activityId:activityInfo.activityId}}}> 详情 </Button>
        </CardActions>

      </Card>
    );
  }
}

SingleActivityCard.propTypes = {
    classes: PropTypes.object.isRequired,
    activityInfo: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleActivityCard);
