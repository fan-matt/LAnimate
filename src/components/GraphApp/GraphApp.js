import React from "react";

import Space from "./../Space/Space.js";


class GraphApp extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <Space />
            </div>
        );
    }
}


export default GraphApp;