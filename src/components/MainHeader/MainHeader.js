import React from "react";

import "./MainHeader.css";


class Header extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <h1> LAnimate </h1>
            </div>
        );
    }
}


export default Header;