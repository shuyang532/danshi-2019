import React from "react";
import ImageAvatar from "./ImageAvatar";
import UserFacilities from "./UserFaclities";


class LoginAfter extends React.Component{

    render(){
        const {callBack} = this.props;
        return(
            <div tabIndex={0} role="button"  >
                <ImageAvatar/>
                <UserFacilities/>
            </div>
        );
    }
}

export default LoginAfter;

// onClick={callBack(false)}
// onKeyDown={callBack(false)}
