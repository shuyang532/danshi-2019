import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const options = [
  '按照热度降序',
  '按照时间从新到旧顺序',
];

class SortListMenu extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      selectedIndex: 1
    };
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
            <ListItemText primary="选择排序方式" secondary={options[this.state.selectedIndex]} />
          </ListItem>
        </List>

        <Menu anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
          {options.map((option, index) => (
            <MenuItem key={option} selected={index === this.state.selectedIndex} onClick={(e) => this.handleMenuItemClick(index, e)}>
              {option}
            </MenuItem>
          ))}
        </Menu>

      </div>
    );
  }

}

SortListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortListMenu);
