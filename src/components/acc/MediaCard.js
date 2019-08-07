import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import activityInfo from './SingleData';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
  },
  media: {
    height: 140,
  },
});

// 函数组件的传参可以直接用props.XX来使用
export default function MediaCard(props) {
  const classes = useStyles();
  const activityInfo = props.activityInfo;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {activityInfo.image}
          title="活动简略信息"
        />
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
        <Button size="small" color="primary">
          收藏
        </Button>
        <Button size="small" color="primary">
          报名
        </Button>
        <Button size="small" color="primary">
          分享
        </Button>
        <Button size="small" color="primary">
          详情
        </Button>
      </CardActions>
    </Card>
  );
}
