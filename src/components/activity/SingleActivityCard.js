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
          <CardMedia className={classes.media} image={activityInfo.cover} title="活动简略信息"/>
          {console.log(activityInfo.cover)}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {activityInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {activityInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary"> 收藏 </Button>
          <Button size="small" color="primary"> 报名 </Button>
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
