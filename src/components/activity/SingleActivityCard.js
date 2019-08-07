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

const styles = () => ({
  card: {
    maxWidth: 290,
  },
  media: {
    height: 140,
  },
})

// const activityInfo = {
//   title: '晨读',
//   company: '复旦大学文学社',
//   photo: require('../assets/1.jpg'),
//   image: require('../assets/2.jpg'),
//   description: '这里是活动介绍，此处将允许显示多行文本，就像这里展示的这样',
//   registerStartTime: '2019-07-07 13:00',
//   registerEndTime: '2019-07-09 13:00',
//   executeStartTime: '2019-08-01 13:00',
//   executeEndTime: '2019-09-01 13:00',
//   type: '其它',
//   place: 'Z2201',
//   numberOfParticipants: '40',
//   limitOfPeople: '50',
//   scope: '公开可见',
// };

class SingleActivityCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {classes} = this.props;
    const {activityInfo} = this.props;
    return (
      <Card className={classes.card}>

        <CardActionArea>
          <CardMedia className={classes.media} image= {activityInfo.image} title="活动简略信息"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {activityInfo.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {activityInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary"> 收藏 </Button>
          <Button size="small" color="primary"> 报名 </Button>
          <Button size="small" color="primary"> 分享 </Button>
          <Button size="small" color="primary"> 详情 </Button>
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
