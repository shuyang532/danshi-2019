import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import cookie from 'react-cookies';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const options = [
  '活动详情',
  '成员管理',
];

class SplitButton extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      anchorEl: null,
      selectedIndex: 0, //typeId-1
      isSecond: false,
    };
  }

  componentDidMount() {
    // axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/type', {
    //   params:{}
    // }).then((res) => { //res.data
    //   this.setState({
    //     options: res.data.context,
    //     isSecond: true,
    //   })
    // }).catch((err) => {
    //   alert('获取活动大类列表出现问题');
    // })
  }

  handleClickListItem = (e) => {
    e.preventDefault();
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleMenuItemClick = (index, e) => {
    e.preventDefault();
    this.setState({
      anchorEl: null,
      selectedIndex: index
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>

      <ButtonGroup variant="contained" color="primary">
          <Button>{this.state.isSecond ? this.state.options[this.state.selectedIndex].name : "活动详情"}</Button>
          <Button variant="contained" color="primary" size="small" onClick={(e) => this.handleClickListItem(e)}>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

        <Popper open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} transition disablePortal onClose={this.handleClose}>
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                  {(this.state.isSecond ? this.state.options : options).map((option,index) => (
                    <MenuItem key={index} selected={index === this.state.selectedIndex} onClick={(e) => this.handleMenuItemClick(index, e)}>
                      {this.state.isSecond ? option.name : option}
                    </MenuItem>
                  ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
        </Popper>

      </div>
    );
  }

}

SplitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplitButton);
