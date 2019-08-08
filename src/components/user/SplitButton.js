import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['11111111111', '22222222222222', '3333333333333'];

// export default function SplitButton() {
export default class SplitButton extends Component{
  constructor() {
    super();
    this.state = {
      open: false,
      anchorRef: null,
      selectedIndex: 1,
    };
  }

  handleClick = () => {
    alert(`You clicked ${options[selectedIndex]}`);
  }

  handleMenuItemClick = (e, index) => {
    this.setState({
      open: false,
      selectedIndex: index,
    })
  }

  handleToggle = () => {
    this.setState({
      open: prevOpen => !prevOpen,
    })
  }

  handleClose = (e) => {
    if (this.state.anchorRef.current && this.state.anchorRef.current.contains(e.target)) {
      return;
    }
    this.setState({
      open: false,
    })
  }

  render(){
    return (
      <Grid container>
        <Grid item xs={12} align="center">

          <ButtonGroup variant="contained" color="primary" ref={this.state.anchorRef} aria-label="split button">
            <Button onClick={this.handleClick}>{options[this.state.selectedIndex]}</Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              aria-owns={this.state.open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>

         {/* anchorEl替换typelistmenu  anchorEl={this.state.anchorRef.current}*/}
          <Popper open={this.state.open}  transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper id="menu-list-grow">
                  <ClickAwayListener onClickAway={(e) => this.handleClose}>
                    <MenuList>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === this.state.selectedIndex}
                          onClick={(e) => this.handleMenuItemClick(e, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

        </Grid>
      </Grid>
    );
  }

}
