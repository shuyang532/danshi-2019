import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 5,
  },
});

const rows = [
  {
    identityId: 1,
    name: '乒乓球协会',
    personNum: 159,
    activityNum: 22,
    myIdentity: '社团长',
    operation: '移交社长身份，添加/移除管理员，创建/修改活动'
  },
  {
    identityId: 2,
    name: '乒乓球协会',
    personNum: 159,
    activityNum: 22,
    myIdentity: '社团长',
    operation: '移交社长身份，添加/移除管理员，创建/修改活动'
  },
  {
    identityId: 3,
    name: '乒乓球协会',
    personNum: 159,
    activityNum: 22,
    myIdentity: '社团长',
    operation: '移交社长身份，添加/移除管理员，创建/修改活动'
  },
  {
    identityId: 4,
    name: '文学社',
    personNum: 237,
    activityNum: 33,
    myIdentity: '管理员',
    operation: '创建/修改活动'
  },
  {
    identityId: 5,
    name: '文学社',
    personNum: 237,
    activityNum: 33,
    myIdentity: '管理员',
    operation: '创建/修改活动'
  },
  {
    identityId: 6,
    name: '文学社',
    personNum: 237,
    activityNum: 33,
    myIdentity: '管理员',
    operation: '创建/修改活动'
  },
  {
    identityId: 7,
    name: '动漫社',
    personNum: 262,
    activityNum: 22,
    myIdentity: '普通成员',
    operation: '无'
  },
  {
    identityId: 8,
    name: '动漫社',
    personNum: 262,
    activityNum: 22,
    myIdentity: '普通成员',
    operation: '无'
  },
];

class Identity extends Component{
  constructor() {
    super();
    this.state = {};
  }

  render(){
        const {classes} =this.props;
        return(
            <div className={classes.root}>
              <Paper>
                <Table>

                <TableHead>
                  <TableRow>
                    <TableCell>社团名称</TableCell>
                    <TableCell align="center">社团总人数</TableCell>
                    <TableCell align="center">社团活动数</TableCell>
                    <TableCell align="center">我的身份</TableCell>
                    <TableCell align="center">操作列表</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                {rows.map(row => (
                  <TableRow key={row.identityId}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="center">{row.personNum}</TableCell>
                  <TableCell align="center">{row.activityNum}</TableCell>
                  <TableCell align="center">{row.myIdentity}</TableCell>
                  <TableCell align="center">{row.operation}</TableCell>
                  </TableRow>
                ))}
                </TableBody>

                </Table>
              </Paper>
            </div>
        );
    }
}

Identity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Identity);
