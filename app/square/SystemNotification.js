import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    title:{
        color:'GREY',
    },
    container: {
        height:300,
        width: 500,
        //maxWidth: 450,
        backgroundColor: '#F5ECCE',
        borderRadius:10,
        boxShadow:'1px 1px 1px 1px #888888'
    },
});

class SystemNotification extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <h1 className={classes.title}>系统公告</h1>
                <br/>
                <div className={classes.container}>
                    <p>旦事系统正式开始开发了</p>
                </div>
            </div>
        );
    }
}
SystemNotification.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SystemNotification);