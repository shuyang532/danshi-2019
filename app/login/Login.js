import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BackgroundItem from '../BackgroundItem'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 400,
        margin: "0 auto",
        marginTop: 150
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    button: {
        width: 150,
        margin: "0 auto",
        marginTop: 20
    },
});


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: 'email',
            password: '',
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        if ("email" === name) {
            let reg = /^[0-9a-zA-Z]+@fudan.edu.cn$/;
            if (reg.test(event.target.value) === false) this.setState({emailError: "必须使用复旦邮箱哦"});
            else this.setState({emailError: "ok,确定是你的哦"});
            if ("" === event.target.value) this.setState({emailError: "email"});
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
    };

    render() {
        const {classes} = this.props;

        return (
            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                <BackgroundItem/>
                <label>邮箱：
                    <TextField
                        id="email"
                        label={this.state.emailError}
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                </label>
                <br/>
                <label>密码：
                    <TextField
                        id="password-input"
                        label="password"
                        className={classes.textField}
                        type="password"
                        onChange={this.handleChange('password')}
                        autoComplete="current-password"
                        margin="normal"
                    />
                </label>
                <br/>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    提交
                </Button>
            </form>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);