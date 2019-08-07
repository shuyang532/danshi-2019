import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {
    height: 100,
    width: '100%',
    color: 'GREY',
    textAlign: 'center',
    fontSize: 10,
  },
  item: {
    paddingTop: 20,
  }
});

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      year: "2019"
    };
  }
  render() {
    const {classes} = this.props;
    const footer = (
      <div className={classes.root}>
        <p className={classes.item}>晨曦工作室 版权所有</p>
        <p>Copyright © 2019 Dawn Studio. All rights reserved. </p>
      </div>
    );
    return footer;
  }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);
