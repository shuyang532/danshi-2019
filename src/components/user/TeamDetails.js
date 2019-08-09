import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import cookie from 'react-cookies';


const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  typography: {
    width: '100%',
  },
  half: {
    width: '45%',
    margin: 5,
  },
  hidden: {
    width: '45%',
    margin: 5,
    display: 'none',
  },
  paper: {
    margin: 15,
  },
  tableHead: {
    backgroundColor: 'grey',
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
    width: '25%',
    marginTop: 30,
    marginLeft: theme.spacing(1),
  },
});

const test = [{
  "userId": 1,
  "nickname": "test"
}]

class TeamDetails extends Component{
  constructor() {
    super();
    this.state = {
      isSecond: false,
      isLeader: false, //是否是社长
      email01: '', //待添加普通用户邮箱
      email02: '', //待删除普通用户邮箱
      email03: '', //待添加管理员邮箱
      email04: '', //待删除管理员邮箱
      email05: '', //移交社长邮箱
      currentPassword: '', //验证当前用户的密码（为了安全性）
      result: '',
      message: '',
      teamId: 10,
      name: '', //社团名称
      leader: '', //社长
      admin: '', //集体账户管理员
      member: '', //集体账户成员
    };
  }

  componentDidMount() {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team', {
      params: {
        teamId: this.state.teamId,
      }
    }).then((res) => { //res.data
      this.setState({
        name: res.data.context[this.state.teamId].name,
        leader: res.data.context[this.state.teamId].leader,
        admin: res.data.context[this.state.teamId].admin,
        member: res.data.context[this.state.teamId].member,
        isSecond: true,
      })
    }).catch((err) => {
      alert('读取社团信息出现问题');
    })
  }

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleAddMember = () => {
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team/member", {
      teamId: this.state.teamId,
      email: this.state.email01,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("成功添加普通用户");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('添加普通用户出现问题');
    })
  }

  handleDelMember = () => {
    axios.delete('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team/member', {
      data: {
        teamId: this.state.teamId,
        email: this.state.email02,
      }
    }).then((res) => { //res.data
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("成功删除普通用户");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('删除普通用户出现问题(axios跨域问题，等后端代码和并后再尝试)');
    })
  }

  handleAddAdmin = () => {
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team/admin", {
      teamId: this.state.teamId,
      email: this.state.email03,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("成功添加管理员");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('添加管理员出现问题');
    })
  }

  handleDelAdmin = () => {
    axios.delete('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team/admin', {
      data: {
        teamId: this.state.teamId,
        email: this.state.email04,
      }
    }).then((res) => { //res.data
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("成功删除管理员");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('删除管理员出现问题(axios跨域问题，等后端代码和并后再尝试)');
    })
  }

  handleTranLeader = () => {
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/team/transfer", {
      teamId: this.state.teamId,
      email: this.state.email05,
      currentPassword: this.state.currentPassword,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("成功移交社长");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('移交社长出现问题');
    })
  }

  render(){
        const {classes} =this.props;
        return(
          <div className={classes.root}>

          <div className={this.state.isLeader ? classes.half : classes.hidden}>

            <Paper className={classes.paper}>
              <Table>
              <TableHead className={classes.tableHead}><TableRow><TableCell align="center"> 社长 </TableCell></TableRow></TableHead>
              <TableBody>
              <TableRow>
              <TableCell align="center"> {this.state.isSecond ? this.state.leader.nickname : 'unknown'} </TableCell>
              </TableRow>
              </TableBody>
              </Table>
            </Paper>

            <Paper className={classes.paper}>
              <Table>
              <TableHead className={classes.tableHead}><TableRow><TableCell align="center"> 管理员 </TableCell></TableRow></TableHead>
              <TableBody>
              {(this.state.isSecond ? this.state.admin : test).map(admin => (
                <TableRow key={admin.userId}>
                <TableCell align="center"> {admin.nickname} </TableCell>
                </TableRow>
              ))}
              </TableBody>
              </Table>
            </Paper>

            <Paper className={classes.paper}>
              <Table>
              <TableHead className={classes.tableHead}><TableRow><TableCell align="center"> 普通成员 </TableCell></TableRow></TableHead>
              <TableBody>
              {(this.state.isSecond ? this.state.member : test).map(member => (
                <TableRow key={member.userId}>
                <TableCell align="center"> {member.nickname} </TableCell>
                </TableRow>
              ))}
              </TableBody>
              </Table>
            </Paper>

          </div>

          <div className={classes.half}>

          <div className={classes.line}>
          <TextField id="email01" label="添加普通成员账户（输入复旦学邮哟~）" value={this.state.email01} onChange={(e) =>this.handleChange('email01',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleAddMember}> 确认添加 </Button>
          </div>

          <div className={classes.line}>
          <TextField id="email02" label="删除普通成员账户（输入复旦学邮哟~）" value={this.state.email02} onChange={(e) =>this.handleChange('email02',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleDelMember}> 确认删除 </Button>
          </div>

          <div className={classes.line}>
          <TextField id="email03" label="添加管理员账户（输入复旦学邮哟~）" value={this.state.email03} onChange={(e) =>this.handleChange('email03',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleAddAdmin}> 确认添加 </Button>
          </div>

          <div className={classes.line}>
          <TextField id="email04" label="删除管理员账户（输入复旦学邮哟~）" value={this.state.email04} onChange={(e) =>this.handleChange('email04',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleDelAdmin}> 确认删除 </Button>
          </div>

          <div className={classes.line}>
          <TextField id="email05" label="移交社长账户（输入复旦学邮哟~）" value={this.state.email05} onChange={(e) =>this.handleChange('email05',e)} margin="normal" className={classes.textField}/>
          <TextField id="currentPassword" label="移交社长账户一定要输入当前密码验证哦~" value={this.state.currentPassword} onChange={(e) =>this.handleChange('currentPassword',e)} margin="normal" className={classes.textField}/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleTranLeader}> 确认移交 </Button>
          </div>

          </div>

          </div>
        );
    }
}

TeamDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamDetails);
