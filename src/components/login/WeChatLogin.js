import React, {Component} from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import JQuery from 'jquery';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MailIcon from '@material-ui/icons/Mail';
import cookie from 'react-cookies';

const styles = theme => ({
  content: {
    width: 380,
  },
  image: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  }
});

class WeChatLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      code: '',
      state: '',
    };
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit = () => {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user', {
      params: {
        code: this.state.code,
        state: this.state.state,
      }
    }).then((res) => { //res.data
      this.handleClose();
      cookie.save('userId', res.data.userId, {
        path: '/'
      });
      alert('微信登录成功');
      this.props.onClick();
    }).catch((err) => {
      alert('微信登录出现问题');
    })
  };


  render() {
    const {classes} = this.props;
    return (
      <div>

        <ListItem onClick = {this.handleOpen} button>
          <ListItemText primary={'微信登录'}/>
        </ListItem>

        <Dialog open = {this.state.open} onClose = {this.handleClose}>

        <DialogTitle> 微信登录 </DialogTitle>
        <DialogContent className = {classes.content}>
          <img src = {require('../assets/7.png')} className = {classes.image}/>
        </DialogContent>

        <DialogActions >
        <Button onClick = {this.handleClose} color = 'primary'> 关闭 </Button>
        <Button onClick = {this.handleSubmit} color = 'primary'> 登录 </Button>
        </DialogActions>
        </Dialog>
      </div>
    );
  }
}

WeChatLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeChatLogin);
