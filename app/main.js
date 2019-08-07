// main.js
import React from 'react';
import {render} from 'react-dom';
//import ImageAvatar from './ImageAvatar'
//import ClippedDrawer from './ClippedDrawer'
//import Login from './login/Login'
//import Register from './register/Register';
//import SquareActivities from './square/SquareActivities'
//import IrregularActivities from './square/IrregularActivities'
//import BottomDisplay from './square/BottomDisplay'
import UserCenter from './UserCenter'
import Login from './Login'
import BackgroundItem from './BackgroundItem'
import ActivityDisplaySmall from './square/ActivityDisplaySmall'
import ActivityDisplayBig from './square/ActivityDisplayBig'

import './style/main.css';
import ClippedDrawer from "./ClippedDrawer";
//使用require导入css文件
render(
    <ClippedDrawer/>,
    document.getElementById('root')
);
