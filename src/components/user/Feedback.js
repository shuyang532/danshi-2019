import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import cookie from 'react-cookies';


const styles = {
  root: {
    flexGrow: 1,
    marginLeft: 50,
    marginRight: 50
  },
  button: {
    marginTop: 30,
    marginRight: 50
  }
};

class Feedback extends Component{
  constructor() {
    super();
    this.state = {
      title: '', //标题
      context: '', //内容
      result: '',
      message: '',
    };
  }

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleClear = () =>{
    this.setState({
      title: '',
      context: '',
    })
  }

  handleSubmit = () =>{
    axios.post("http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/feedback", {
      title: this.state.title,
      context: this.state.context,
    }).then((res) => {
      this.setState({
        result: res.data.result,
        message: res.data.message,
      })
      if (this.state.result) {
        alert("意见反馈成功");
        alert("(测试读取，使用时应删去)" + this.state.message);
      } else {
        alert(this.state.message);
      }
    }).catch((err) => {
      alert('意见反馈出现问题');
    })
  }

  render(){
    const {classes} =this.props;

    return(
      <div className={classes.root}>
        <TextField id="title" label="反馈标题" fullWidth value={this.state.title} onChange={(e) =>this.handleChange('title', e)} margin="normal"/>
        <TextField id="context" label="反馈内容" fullWidth value={this.state.context} onChange={(e) =>this.handleChange('context', e)} margin="normal"/>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClear}> 清空 </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}> 提交 </Button>
      </div>
    );
  }
}

Feedback.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
