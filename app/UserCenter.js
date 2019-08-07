import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import activities from './activity/Data'
import ActivityDisplay from './activity/ActivityDisplay'
import PersonalInformation from './PersonalInformation'

const activities1 = activities.slice(0,3);
const activities2 = activities.slice(0,3);
const activities3 = activities.slice(0,3);

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 4 * 2 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    app:{
        position:'static',
        backgroundColor: 'white',
        color:'black',

    }
});

class UserCenter extends React.Component {
    constructor(props){
        super(props);
        this.state = {value : parseInt(this.props.match.params.name)};
    }
    componentWillReceiveProps(nextProps) {
        this.setState({value : parseInt(nextProps.match.params.name)});
    }

    handleChange = (event, value) => {
        this.setState({ value:value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <AppBar className={classes.app}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="我参加的" />
                        <Tab label="我收藏的" />
                        <Tab label="我发起的"/>
                        <Tab label="修改个人资料" />
                        <Tab label="我的集体用户"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><ActivityDisplay activities={activities1}/></TabContainer>}
                {value === 1 && <TabContainer><ActivityDisplay activities={activities2}/></TabContainer>}
                {value === 2 && <TabContainer><ActivityDisplay activities={activities3}/></TabContainer>}
                {value === 3 && <TabContainer><PersonalInformation/></TabContainer>}
            </div>
        );
    }
}

UserCenter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCenter);
