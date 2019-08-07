import React from 'react';

import style from './style/BackgroundItem.css';

class BackgroundItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const innerStyle = {
            backgroundImage: require("../pictures/bk.jpeg"),
        };

        return (
            <div className={style.block} style={innerStyle}>

            </div>
        );
    }
}

export default BackgroundItem;