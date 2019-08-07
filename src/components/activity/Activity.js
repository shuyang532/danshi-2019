import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// 个人组件
import TypeListMenu from './TypeListMenu'; //选择活动类型菜单
import SortListMenu from './SortListMenu'; //选择排序方式菜单
import ActivityDisplay from './ActivityDisplay'; //多个活动展示
import Pagination from './Pagination'; //分页按钮
// import activities from './TotalData'; //所有数据

import axios from 'axios';
import cookie from 'react-cookies';


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
      //传给后端接口的参数
      pageSize: 10,	//一页显示多少个活动（默认为0，即不分页）
      pageNum: 1,	//当前所在页（默认为 1,即第一页）
      order: "engagement",	//排序方式,默认按照热度降序,"time"代表按照时间从新到旧顺序
      //返还给前端的返回值
      activitiesList: [], //活动信息
      pageTotal: 1, //总页数
      // 避免异步
      isSecond: false,
    };
  }

  componentDidMount() {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
      params: {
        pageSize: this.state.pageSize,
        pageNum: this.state.pageNum,
        order: this.state.order,
      }
    }).then((res) => { //res.data
      this.setState({
        activitiesList: res.data.context,
        pageTotal: res.data.pageTotal,
        isSecond: true,
      })
    }).catch((err) => {
      alert('读取活动信息出现问题');
    })
  }

  // 获取当前页码的活动信息
  getCurrentPage = (currentPage) => {
    axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/activity', {
      params: {
        pageSize: this.state.pageSize,
        pageNum: currentPage, //当前页
        order: this.state.order,
      }
    }).then((res) => { //res.data
      this.setState({
        activitiesList: res.data.context,
        pageTotal: res.data.pageTotal,
      })
    }).catch((err) => {
      alert('读取当前页活动信息出现问题');
    })
  }


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
        {this.state.isSecond ? <Pagination pageConfig={this.state.pageTotal} pageCallbackFn={this.getCurrentPage}/> : <div></div>}

        </div>
      );
    }
  }



Activity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);
