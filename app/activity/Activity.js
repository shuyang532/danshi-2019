import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import TopDisplay from './TopDisplay';
import ActivityDisplay from "./ActivityDisplay";
import activities from './Data'
import PageComponent from './PageComponent'

const styles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }
});


class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activitiesList: [],
            pageConfig: {
                totalPage: activities.length % 8 > 0 ? parseInt(activities.length / 8 + 1) : activities / 8, //总页码
            }
        };

        this.getCurrentPage = this.getCurrentPage.bind(this);
    }

    getCurrentPage(currentPage) {
        if (currentPage === this.state.pageConfig.totalPage) {
            this.setState({
                    activitiesList: activities.slice(8 * (currentPage - 1), activities.length - 1)
                }
            )
        } else {
            this.setState({
                    activitiesList: activities.slice(8 * (currentPage - 1), 8 * (currentPage - 1) + 8)
                }
            )
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <TopDisplay/>
                <br/>
                <br/>
                <ActivityDisplay activities={this.state.activitiesList}/>
                <br/>
                <br/>
                <PageComponent pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage}/>
            </div>
        );
    }
}

Activity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);
