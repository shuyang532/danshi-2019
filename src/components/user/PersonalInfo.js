import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import cookie from 'react-cookies';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    marginRight: 50
  },
  line: {
    display: 'block',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '70%',
  },
  button: {
    width: '10%',
    marginTop: 30,
    marginLeft: 35,
  },
  content: {
    width: 380,
  },
});

class PersonalInfo extends Component{
  constructor() {
    super();
    this.state = {
      userId: '',
      nickname: '',
      email: '',
      openVa: false,
      validateCode: '',
      oldPassword: '',
      newPassword: '',
      openId: '',
      state: '',
      result: '',
      message: ''
    };
  }

  componentDidMount() {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user', {
        params: {
          userId: userId,
        }
      }).then((res) => { //res.data
        this.setState({
          userId:userId,
          nickname:res.data.nickname,
          email:res.data.email,
          openId:res.data.openId,
        })
      }).catch((err) => {
        alert('读取个人信息出现问题');
      })
    }
  }

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  //修改昵称
  handleChangeNickname = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/nickname", {
        nickname: this.state.nickname,
      }).then((res) => {
        this.setState({
          result: res.data.result,
          message: res.data.message,
        })
        if (this.state.result) {
          alert("昵称修改成功");
          alert("(测试读取，使用时应删去)" + this.state.message);
        } else {
          alert(this.state.message);
        }
      }).catch((err) => {
        alert('昵称修改出现问题');
      })
    }
  }

  //修改邮箱需要重新验证
  handleChangeEmail = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/bind", {
        email: this.state.email,
      }).then((res) => {
        this.setState({
          result: res.data.result,
          message: res.data.message,
        })
        if (this.state.result) {
          alert("记得查收验证邮件输入验证码呐~");
          alert("(测试读取，使用时应删去)" + this.state.message);
          this.handleOpenVa();
        } else {
          alert(this.state.message);
        }
      }).catch((err) => {
        alert('学邮修改出现问题');
      })
    }
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
        alert("学邮修改成功！快来体验我们吧~");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
      this.handleCloseVa();
    }).catch((err) => {
      alert('验证码输入出现问题');
    })
  }

  //解绑学邮
  handleUnbindEmail = () => {
    axios.delete('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/bind', {
      data: {
        currentPassword: this.state.oldPassword,
      }
    }).then((res) => { //res.data
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("学邮解绑成功~");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('解绑学邮出现问题(axios跨域问题，等后端代码和并后再尝试)');
    })
  }

  //绑定微信
  handleBindWeChat = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/bind", {
        code: this.state.openid,
        state: this.state.state,
      }).then((res) => {
        this.setState({
          result: res.data.result,
          message: res.data.message,
        })
        if (this.state.result) {
          alert("微信绑定成功：小程序上也可以使用呐~");
          alert("(测试读取，使用时应删去)" + this.state.message);
        } else {
          alert(this.state.message);
        }
      }).catch((err) => {
        alert('微信绑定出现问题');
      })
    }
  }

  //修改密码
  handleChangePassword = () => {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user/passwd", {
        oldPassword: this.state.oldPassword,
        password: this.state.password,
      }).then((res) => {
        this.setState({
          result: res.data.result,
          message: res.data.message,
        })
        if (this.state.result) {
          alert("密码修改成功");
          alert("(测试读取，使用时应删去)" + this.state.message);
        } else {
          alert(this.state.message);
        }
      }).catch((err) => {
        alert('密码修改出现问题');
      })
    }
  }


  render(){
    const {classes} =this.props;
    return(
      <div className={classes.root}>

        <div className={classes.line}>
          <TextField id="nickname" label="昵称"  value={this.state.nickname} onChange={(e) =>this.handleChange('nickname',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" onClick={this.handleChangeNickname} className={classes.button}> 确认修改 </Button>
        </div>

        <div className={classes.line}>
          <TextField id="oldPassword" label="当前密码（修改密码/修改学邮/解绑学邮一定要记得填写这个呀！）" value={this.state.oldPassword} onChange={(e) =>this.handleChange('oldPassword',e)} margin="normal" className={classes.textField}/>
        </div>

        <div className={classes.line}>
          <TextField id="newPassword" label="新密码" value={this.state.newPassword} onChange={(e) =>this.handleChange('newPassword',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" onClick={this.handleChangePassword} className={classes.button}> 确认修改 </Button>
        </div>

        <div className={classes.line}>
          <TextField id="email" label="学邮（必须是复旦邮箱呐~）" value={this.state.email} onChange={(e) =>this.handleChange('email',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" onClick={this.handleChangeEmail} className={classes.button}> 确认绑定 </Button>
          <Button variant="contained" color="primary" onClick={this.handleUnbindEmail} className={classes.button}> 解除绑定 </Button>
        </div>

        <div className={classes.line}>
          <TextField id="openId" label="微信ID（微信一经绑定不可修改）" value={this.state.openId} onChange={(e) =>this.handleChange('openId',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" onClick={this.handleBindWeChat} className={classes.button}> 确认绑定 </Button>
        </div>

        <Dialog open = {this.state.openVa} onClose = {this.handleCloseVa}>
        <DialogTitle> 输入验证码完成新学邮验证 </DialogTitle>
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

PersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInfo);
