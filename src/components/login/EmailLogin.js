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
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import cookie from 'react-cookies';

const styles = (theme) => ({
  content: {
    width: 380,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  }
});

class EmailLogin extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      email: '',
      password: '',
      emailLabel: '学邮',
      passLabel: '密码',
    };
  };

  handleChange = (name, e) => {
    e.preventDefault();
    this.setState({
      [name]: e.target.value,
    });
    if ('email' === name) {
      let reg = /^[0-9a-zA-Z]+@fudan.edu.cn$/;
      if (reg.test(e.target.value) === false) {
        this.setState({
          emailLabel: '必须使用复旦的邮箱呐~~',
        });
      } else {
        this.setState({
          emailLabel: '确认了，就是你！',
        });
      }
      if ("" === e.target.value) {
        this.setState({
          emailLabel: '学邮',
        });
      }
    }
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClear = () => {
    this.setState({
      email: '',
      password: '',
      emailLabel: '学邮',
      passLabel: '密码',
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
    this.handleClear();
  };

  handleSubmit = () => {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user', {
      params: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then((res) => { //res.data
      this.handleClose();
      cookie.save('userId', res.data.userId, {
        path: '/'
      });
      alert('学邮登录成功');
      this.props.onClick();
    }).catch((err) => {
      alert('学邮登录出现问题');
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div>

        <ListItem onClick = {this.handleOpen} button>
          <ListItemText primary={'学邮登录'}/>
        </ListItem>

        <Dialog open = {this.state.open} onClose = {this.handleClose}>
        <DialogTitle> 学邮登录 </DialogTitle>

        <DialogContent className = {classes.content}>
        <TextField margin = 'dense' id = 'email' label = {this.state.emailLabel} type = 'email' value = {this.state.email} className = {classes.textField} onChange = {(e) => this.handleChange('email',e)} fullWidth/>
        <TextField margin = 'dense' id = 'password' label = {this.state.passLabel} type = 'password' value = {this.state.password} className = {classes.textField} onChange = {(e) => this.handleChange('password',e)} fullWidth/>
        </DialogContent>

        <DialogActions >
        <Button onClick = {this.handleClear} color = 'primary'> 清空 </Button>
        <Button onClick = {this.handleClose} color = 'primary'> 关闭 </Button>
        <Button onClick = {this.handleSubmit} color = "primary"> 登录 </Button>
        </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EmailLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailLogin);
