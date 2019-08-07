import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// 个人组件
import TypeListMenu from './TypeListMenu'; //选择活动类型菜单
import SortListMenu from './SortListMenu'; //选择排序方式菜单
import ActivityDisplay from './ActivityDisplay'; //多个活动展示
import Pagination from './Pagination'; //分页按钮
import activities from './TotalData'; //所有数据


const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menudis: {
    marginLeft: '60%',
  },
  menubar: {
    float: 'left',
    width: '40%',
    marginLeft: 5,
  }
});

class Activity extends Component {
  constructor() {
    super();
    this.state = {
      activitiesList: [],
      pageConfig: {
        totalPage: activities.length % 8 > 0 ? parseInt(activities.length / 8 + 1) : activities / 8, //总页码，一页显示8条
      }
    };
  }

  getCurrentPage = (currentPage) => {
    if (currentPage === this.state.pageConfig.totalPage) { //最后一页
      this.setState({
        activitiesList: activities.slice(8 * (currentPage - 1)), //slice 截取对象，从start到end(不包括该元素)，end不指定，则到结束
      });
    } else {
      this.setState({
        activitiesList: activities.slice(8 * (currentPage - 1), 8 * (currentPage - 1) + 8),
      });
    }
  };

  render() {
      const {classes} = this.props;
      return (
        <div>

        <div className={classes.menudis}>
        <div className={classes.menubar}> <TypeListMenu /> </div>
        <div className={classes.menubar}> <SortListMenu /> </div>
        </div>

        <br/>
        <br/>
        <ActivityDisplay activities={this.state.activitiesList}/>
        <br/>
        <br/>
        <Pagination pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage}/>
        </div>
      );
    }
  }

Activity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);
