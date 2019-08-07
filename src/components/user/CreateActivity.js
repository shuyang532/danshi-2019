import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import cookie from 'react-cookies';


const teams = [
  {
    "teamId": 0,
    "teamName": "复旦大学某社团一(不可视)",
    "teamLeader": true,
    "teamAdmin": false
  }
]

const types = [
  {
    "typeId": 1,
    "name": "大类一"
  }, {
    "typeId": 2,
    "name": "大类二"
  }
]

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: 50,
    marginRight: 50
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  input: {
    display: 'none'
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: '42%',
    marginRight: '42%',
    width: '16%',
  },
});

class CreateActivity extends Component{
  constructor() {
    super();
    this.state = {
      isSecond: false, //保证第二次渲染时获得信息
      teams: [], //读取的集体账户信息
      teamId: 0, //返回的集体账户ID (个人名义：0)
      name: '', //返回的活动名称
      description: '', //返回的活动简介
      cover: '', //返回的表单中的上传文件字段
      coverLabel: '上传活动封面图',
      types: [], //读取的活动大类信息
      typeId: 0, //返回的活动大类ID
      startTime: '', //返回的活动开始时间
      endTime: '', //返回的活动结束时间
      place: '', //返回的活动地点
      limitOfPeople: 0, //返回的报名人数上限（0代表无限）
      scope: 'public', //活动可见性（public / member）
      result: '',
      message: '',
    }
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
          teams: res.data.team,
          isSecond: true,
        })
      }).catch((err) => {
        alert('获取集体账户出现问题');
      })

      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity/type', {
        params:{}
      }).then((res) => { //res.data
        this.setState({
          types: res.data.context,
          isSecond: true,
        })
      }).catch((err) => {
        alert('获取活动大类列表出现问题');
      })

    }
  }

  handleChange = (name, e) => {
    console.log(this.state);
    if ('cover' === name) {
      this.setState({
        cover: e.target.files[0],
        coverLabel: '活动封面图已上传',
      })
    }else {
      this.setState({
        [name]: e.target.value,
      });
    }
  }

  handleSubmit = () => {
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity", {
      teamId: this.state.teamId,
      name: this.state.name,
      description: this.state.description,
      cover: this.state.cover,
      typeId: this.state.typeId,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      place: this.state.place,
      limitOfPeople: this.state.limitOfPeople,
      scope: this.state.scope,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("活动创建成功");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('活动创建出现问题');
    })
  }

  render(){
    const {classes} =this.props;

    return(
      <div>
      <form className={classes.root} autoComplete="off" noValidate>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="helper">活动创建团体</InputLabel>
          <Select value={this.state.teamId} onChange={(e) =>this.handleChange('teamId', e)} input={<Input name="creator" id="teamId" />}>
            <MenuItem value={0} key={0}>个人名义</MenuItem>
            {(this.state.isSecond ? this.state.teams : teams).map( team => (
              <MenuItem disabled={!team.teamLeader && !team.teamAdmin} value={team.teamId} key={team.teamId}> {team.teamName} </MenuItem>
            ))}
          </Select>
          <FormHelperText>选择创建活动所代表的的集体账户或以个人名义创建</FormHelperText>
        </FormControl>

        <TextField id="name" label="活动名称" value={this.state.name} onChange={(e) =>this.handleChange('name', e)} margin="normal"/>
        <TextField id="description" label="活动简介" value={this.state.description} onChange={(e) =>this.handleChange('description', e)} margin="normal"/>

        <input accept="image/png,image/gif,image/jpeg" onChange={(e) => this.handleChange('cover',e)} className={classes.input} id="cover" multiple type="file"/>
        <label htmlFor="cover">
        <Button variant="outlined" component="span" className={classes.button}> {this.state.coverLabel} </Button>
        </label>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="helper">活动大类</InputLabel>
          <Select value={this.state.typeId} onChange={(e) =>this.handleChange('typeId', e)} input={<Input name="creator" id="typeId" />}>
            <MenuItem value={0} key={0}>全部</MenuItem>
            {(this.state.isSecond ? this.state.types : types).map( type => (
              <MenuItem value={type.typeId} key={type.typeId}> {type.name} </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField id="startTime" label="活动开始时间" type="datetime-local" value={this.state.startTime} onChange={(e) =>this.handleChange('startTime', e)} InputLabelProps={{shrink: true,}} margin="normal"/>
        <TextField id="endTime" label="活动结束时间" type="datetime-local" value={this.state.endTime} onChange={(e) =>this.handleChange('endTime', e)} InputLabelProps={{shrink: true,}} margin="normal"/>

        <TextField id="place" label="活动地点" value={this.state.place} onChange={(e) =>this.handleChange('place', e)} margin="normal"/>

        <TextField id="limitOfPeople" label="报名人数上限（0代表无限）" type="number" value={this.state.limitOfPeople} onChange={(e) =>this.handleChange('limitOfPeople', e)} margin="normal"/>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="helper">活动可见性</InputLabel>
          <Select value={this.state.scope} onChange={(e) =>this.handleChange('scope', e)} input={<Input name="creator" id="scope" />}>
            <MenuItem value={'public'} key={0}> public（公开可见） </MenuItem>
            <MenuItem value={'member'} key={1}> member（成员可见/私人可见）</MenuItem>
          </Select>
        </FormControl>

      </form>

      <Button variant="contained" color="primary" className={classes.submit} onClick={this.handleSubmit}> 确认创建 </Button>
    </div>
    );
  }
}


CreateActivity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateActivity);
