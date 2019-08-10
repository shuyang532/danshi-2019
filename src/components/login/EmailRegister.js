import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
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

class EmailRegister extends Component {
  constructor() {
    super();
    this.state = {
      openRe: false,
      openVa: false,
      email: '',
      password: '',
      nickname: '',
      validateCode: '',
      emailLabel: '学邮',
      passLabel: '密码',
      nameLabel: '昵称',
      valiLabel: '验证码',
      result: '',
      message: '',
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

  handleOpenRe = () => {
    this.setState({
      openRe: true,
    });
  };

  handleClear = () => {
    this.setState({
      email: '',
      password: '',
      nickname: '',
      emailLabel: '学邮',
      passLabel: '密码',
      nameLabel: '昵称',
    });
  };

  handleCloseRe = () => {
    this.setState({
      openRe: false
    });
    this.handleClear();
  };

  handleSubmitRe = () => {
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user", {
      email: this.state.email,
      password: this.state.password,
      nickname: this.state.nickname,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("记得查收验证邮件输入验证码呐~");
        alert("(测试读取，使用时应删去)" + this.state.message);
        this.handleCloseRe();
        this.handleOpenVa();
      } else {
        alert(this.state.message);
        this.handleCloseRe();
      }
    }).catch((err) => {
      alert('学邮注册出现问题');
    })
  }

  handleOpenVa = () => {
    this.setState({openVa: true});
  };

  handleCloseVa = () => {
    this.setState({openVa: false});
  };

  handleSubmitVa = () => {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/validate', {
      params: {
        validateCode: this.state.validateCode,
      }
    }).then((res) => { //res.data
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("注册成功！登录来体验我们吧~");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
      this.handleCloseVa();
    }).catch((err) => {
      alert('验证码输入出现问题');
    })
  }


  render() {
    const {classes} = this.props;
    return (
      <div>

        <ListItem onClick = {this.handleOpenRe} button>
          <ListItemText primary={'学邮注册'}/>
        </ListItem>

        <Dialog open = {this.state.openRe} onClose = {this.handleCloseRe}>
          <DialogTitle> 学邮注册 </DialogTitle>

          <DialogContent className = {classes.content}>
          <TextField margin = 'dense' id = 'email' label = {this.state.emailLabel} type = 'email' value = {this.state.email} className = {classes.textField} onChange = {(e)=>this.handleChange('email',e)} fullWidth/>
          <TextField margin = 'dense' id = 'password' label = {this.state.passLabel} type = 'password' value = {this.state.password} className = {classes.textField} onChange = {(e)=>this.handleChange('password',e)} fullWidth/>
          <TextField margin = 'dense' id = 'nickname' label = {this.state.nameLabel} type = 'nickname' value = {this.state.nickname} className = {classes.textField} onChange = {(e)=>this.handleChange('nickname',e)} fullWidth/>
          </DialogContent>

          <DialogActions >
          <Button onClick = {this.handleClear} color = 'primary'> 清空 </Button>
          <Button onClick = {this.handleCloseRe} color = 'primary'> 关闭 </Button>
          <Button onClick = {this.handleSubmitRe} color = "primary"> 注册 </Button>
          </DialogActions>
        </Dialog>

        <Dialog open = {this.state.openVa} onClose = {this.handleCloseVa}>
          <DialogTitle> 输入验证码完成学邮验证 </DialogTitle>
          <DialogContent className = {classes.content}>
          <TextField margin = 'dense' id = 'validateCode' label = '验证码' type = 'validateCode' value = {this.state.validateCode} className = {classes.textField} onChange = {(e)=>this.handleChange('validateCode',e)} fullWidth/>
          </DialogContent>
          <DialogActions >
          <Button onClick = {this.handleSubmitVa} color = "primary"> 验证 </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

EmailRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailRegister);
