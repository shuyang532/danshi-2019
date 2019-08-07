import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display:'flex',
    },
    title: {
        fontSize: 40,
        fontFamily: 'sans-serif',
        fontWeight: 10,
    },
    menu: {
        width: 150,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },
    sort: {
        marginLeft: 910,
    }
});

const currencies = [
    {
        value: '默认排序',
        label: '默认排序',
    },
    {
        value: '按时间排序',
        label: '按时间排序',
    },
    {
        value: '按热度排序',
        label: '按热度排序',
    }
];

class TopDisplay extends React.Component {
    state = {
        sortord: '默认排序',
    };

    handleChange = event => {
        this.setState({
            sortord: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div>
                    <h1 className={classes.title}>活动</h1>
                </div>
                <div className={classes.sort}>
                    <TextField
                        id="select-currency"
                        select
                        label="排序方式"
                        className={classes.textField}
                        value={this.state.sortord}
                        onChange={this.handleChange}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText=""
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
        );
    }
}

TopDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopDisplay);