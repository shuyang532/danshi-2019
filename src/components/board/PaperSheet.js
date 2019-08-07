import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    minHeight: 500,
    width: 800,
    margin: '0 auto',
    textAlign: 'center',
  },
  caption: {
    margin: 5,
    display: 'block',
  },
  message: {
    margin: 15,
    textAlign: 'left',
  }
});

class PaperSheet extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    const {classes} = this.props;
    return (
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            旦事公告板
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            2019-07-26 13：00
          </Typography>
          <Typography component="p" className={classes.message}>
            <br/>
            欢迎加入旦事！！<br/>
            旦事是专属于你的的校园活动信息一站式服务平台。<br/>
            如果你是社团长或者管理员，你可以在这里管理你的社团，任命你的管理员！<br/>
            你可以在这里创建并发布你的社团活动，不需要发传单就能让校内师生报名参与你的活动!<br/>
            如果你是社团成员，你可以在这里查看社团的近期活动，随时收藏，随时报名！<br/>
            如果你从未加入过社团，那么你可以对校内社团组织有更多的了解，你可以加入你心中真正的top1社团！<br/>
            我们是旦事，我们将第一时间为你送达最新最热的活动，让你足不出户就能轻松玩转校园生活！<br/>
            <br/>
            <br/>
            PS：<br/>
            旦事正在快速发展中，我们将在后续的迭代中陆续完善关注交友、留言评论、生活分享等功能，让它成为独属于复旦师生的网站！<br/>
            如果你有好的创意或想法，随时告诉我们哦~<br/>
          </Typography>
        </Paper>
    );
  }

}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperSheet);
