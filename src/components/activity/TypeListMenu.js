import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import cookie from 'react-cookies';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

//用作第一次渲染时的排错
const options = [
  '全部',
  '公益',
  '招聘',
  '运动',
  '讲座',
  '演出',
  '赛事',
  '其它',
];

class TypeListMenu extends Component {
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
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/type', {
      params:{}
    }).then((res) => { //res.data
      this.setState({
        options: res.data.context,
        isSecond: true,
      })
    }).catch((err) => {
      alert('获取活动大类列表出现问题');
    })
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
        <List>
          <ListItem button onClick={(e) => this.handleClickListItem(e)}>
            <ListItemText primary="选择活动类型" secondary={this.state.isSecond ? this.state.options[this.state.selectedIndex].name : "全部"} />
          </ListItem>
        </List>

        <Menu anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
          {(this.state.isSecond ? this.state.options : options).map((option,index) => (
            <MenuItem key={index} selected={index === this.state.selectedIndex} onClick={(e) => this.handleMenuItemClick(index, e)}>
              {this.state.isSecond ? option.name : option}
            </MenuItem>
          ))}
        </Menu>

      </div>
    );
  }

}

TypeListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypeListMenu);
