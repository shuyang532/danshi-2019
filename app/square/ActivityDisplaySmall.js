import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        width: 280,
        height: 240,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius:20,
    },
    num:{
        position:'absolute',
        marginTop:8,
        marginLeft:150,
        borderRadius:8,
        width:110,
        textAlign:'right',
        color:'white',
        fontSize:10,
        fontWeight:'lighter',
        backgroundColor:'rgba(0,0,0,0.6)',
        display:'flex',
        alignItems: 'center',
    },
    activity:{
        fontSize:25,
        fontWeight:'lighter',
        color:'white',
        paddingTop:160,
        paddingLeft:20,
    },
    company:{
        color:'#6E6E6E',
        paddingLeft:20,
    },
    bluePoint:{
        width:8,
        height:8,
        borderRadius:100,
        backgroundColor: '#58D3F7',
        marginLeft:8,
        marginRight:8,
    }

};

class ActivityDisplaySmall extends React.Component {
    num;
    activity;
    company;
    render() {
        const {classes} = this.props;
        const innerStyle = {
            backgroundImage: "url('" + this.props.src + "')",
        };
        return (
            <div style={innerStyle} className={classes.root}>
                <div className={classes.num}>
                    <div className={classes.bluePoint}></div>
                    参加人数{this.props.num}人
                </div>
                <p className={classes.activity}>{this.props.activity}</p>
                <p className={classes.company}>{this.props.company}</p>
            </div>
        );
    }
}

ActivityDisplaySmall.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityDisplaySmall);