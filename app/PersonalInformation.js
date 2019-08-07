import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const styles = {
    root: {
        flexGrow: 1,
        marginLeft:50
    },
    textFiled:{
        width:400
    }
};



class PersonalInformation extends React.Component{
    state={
        nickname:'',
        email:'',
        oldPassword:'',
        newPassword:'',
        id:'',
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                            type="password"
                            // autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange("oldPassword")}
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="newPassword"
                            label="新密码"
                            className={classes.textField}
                            type="password"
                            // autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange("newPassword")}
                            style={{width:350}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="wechatID"
                            label="微信ID"
                            className={classes.textField}
                            // autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange("id")}
                            style={{width:300}}
                        />
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