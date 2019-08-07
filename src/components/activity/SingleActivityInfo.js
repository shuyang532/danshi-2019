import React, {
  Component
} from "react";
import {
  withStyles
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import cookie from 'react-cookies';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
})

class SingleActivityInfo extends Component {
  constructor() {
    super();
    this.state = {
      activityId: 1,
      activityInfo: '',
      isSecond: false,
    }
  }

  componentDidMount() {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
      params: {
        activityId: this.state.activity,
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

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

SingleActivityInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleActivityInfo);
