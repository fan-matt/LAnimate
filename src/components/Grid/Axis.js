import React from "react";
import { Line } from "react-konva";

import ExtendedLine from "./ExtendedLine.js";


class Axis extends React.Component {
    render() {
        let transformer = this.props.transformer;


        return(
            <>
                <ExtendedLine 
                    point1={[0 , 0]}
                    point2={[0 , 1]}
                    transformer={transformer}
                    realSize={this.props.realSize}
                    stroke={"black"}
                    strokeWidth={2}
                />

                <ExtendedLine 
                    point1={[0 , 0]}
                    point2={[1 , 0]}
                    transformer={transformer}
                    realSize={this.props.realSize}
                    stroke={"black"}
                    strokeWidth={2}
                />
            </>
        );
    }
}


export default Axis;