import React from "react";

import Space from "./../Space/Space.js";
import GAControlPanel from "./../GAControlPanel/GAControlPanel.js";

import "./GraphApp.scss";


class GraphApp extends React.Component {
    render() {
        return(
            <div className={this.props.className + " graphApp"}>
                <Space />
                <GAControlPanel />
            </div>
        );
    }
}


export default GraphApp;