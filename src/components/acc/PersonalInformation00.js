import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const styles = {
  root: {
    flexGrow: 1,
    marginLeft: 50
  },
  textFiled: {
    width: 400
  },
  button: {
    margin: 5,

  }
};

class PersonalInformation extends React.Component{
    state={
        nickname:'小明',
        email:'fudan@fudan.edu.cn',
        oldPassword:'***********',
        newPassword:'',
        id:'oL4wyfsajdghsiufdgg',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){
        const {classes} =this.props;
        return(
            <div className={classes.root}>
                <Grid container spacing={24} >
                    <Grid item xs={8}>
                        <TextField
                            id="name"
                            label="昵称"
                            className={classes.textField}
                            value={this.state.nickname}
                            onChange={this.handleChange('nickname')}
                            margin="normal"
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="oldPassword"
                            label="当前密码（修改密码请填写）"
                            className={classes.textField}
                            value={this.state.oldPassword}
                            type="password"
                            onChange={this.handleChange("oldPassword")}
                            margin="normal"
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="newPassword"
                            label="新密码"
                            className={classes.textField}
                            type="password"
                            onChange={this.handleChange("newPassword")}
                            margin="normal"
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="wechatID"
                            label="微信ID"
                            className={classes.textField}
                            value={this.state.id}
                            onChange={this.handleChange("id")}
                            margin="normal"
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid container xs={9} justify="flex-end" alignItems="center">
                      <Button variant="contained" color="primary" className={classes.button}><DeleteIcon/> 还原 </Button>
                      <Button variant="contained" color="primary" className={classes.button}><CloudUploadIcon/> 提交 </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

PersonalInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInformation);
