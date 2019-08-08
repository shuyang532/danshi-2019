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
import axios from 'axios';
import cookie from 'react-cookies';


const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
});

const rows = [{
    teamId: 10,
    teamName: "复旦大学某社团0",
    teamLeader: true,
    teamAdmin: false
  },{
    teamId: 11,
    teamName: "复旦大学某社团1",
    teamLeader: true,
    teamAdmin: false
  }
];

class Identity extends Component{
  constructor() {
    super();
    this.state = {
      teams:'',
      isSecond: false,
    };
  }

  componentDidMount() {
    let userId = cookie.load('userId');
    if (userId != null && userId != '') {
      axios.get('http://rest.apizza.net/mock/f36bd02a14a936b95e5fe39028bfe151/data/user', {
        params: {}
      }).then((res) => { //res.data
        this.setState({
          teams: res.data.team,
          isSecond: true,
        })
      }).catch((err) => {
        alert('读取个人集体账户信息出现问题');
      })
    }

  }

  handleTeamDetail = () =>{

  }

  handleTeamMember = () =>{

  }

  render(){
        const {classes} =this.props;
        return(
            <div className={classes.root}>
              <Paper>
                <Table>

                <TableHead>
                  <TableRow>
                    <TableCell> 社团ID </TableCell>
                    <TableCell align="center"> 社团名称 </TableCell>
                    <TableCell align="center"> 我的社团身份 </TableCell>
                    <TableCell align="center"> 操作列表 </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                {(this.state.isSecond ? this.state.teams : rows).map(team => (
                  <TableRow key={team.teamId}>
                  <TableCell component="th" scope="row">{team.teamId}</TableCell>
                  <TableCell align="center">{team.teamName}</TableCell>
                  <TableCell align="center">{team.teamLeader?'社长':''}{!team.teamLeader&&team.teamAdmin?'管理员':''}{!team.teamLeader&&!team.teamAdmin?'普通成员':''}</TableCell>
                  <TableCell align="center">

                    <Button variant="contained" color="primary" onClick={this.handleTeamDetail} margin="30"> 社团详情 </Button>
                    {team.teamLeader ? <Button variant="contained" color="primary" onClick={this.handleTeamMember}> 成员管理 </Button> : ''}

                  </TableCell>
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
