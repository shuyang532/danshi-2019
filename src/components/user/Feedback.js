import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


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
      title: '',
      nickname: '',
      description: '',
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
      nickname: '',
      description: '',
    })
  }

  handleSubmit = () =>{

  }

  render(){
    const {classes} =this.props;

    return(
      <div className={classes.root}>
        <TextField id="title" label="反馈标题" fullWidth value={this.state.title} onChange={(e) =>this.handleChange('title')} margin="normal"/>
        <TextField id="nickname" label="反馈人昵称" fullWidth value={this.state.nickname} onChange={(e) =>this.handleChange('nickname')} margin="normal"/>
        <TextField id="description" label="反馈内容" fullWidth value={this.state.description} onChange={(e) =>this.handleChange('description')} margin="normal"/>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClear}><DeleteIcon/> 清空 </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}><CloudUploadIcon/> 提交 </Button>
      </div>
    );
  }
}

Feedback.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
