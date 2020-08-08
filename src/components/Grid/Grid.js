import React from "react";
import { Layer, Text , Circle } from 'react-konva';

import Axis from "./Axis.js";


class Grid extends React.Component {
    render() {
        let transformer = this.props.transformer;

        return(
            <Layer>
                <Circle 
                    x={transformer.toScreen([0 , 0])[0]} 
                    y={transformer.toScreen([0 , 0])[1]} 
                    radius={10}
                    fill={"red"}
                />

                <Circle 
                    x={transformer.toScreen([-1 , 1])[0]} 
                    y={transformer.toScreen([-1 , 1])[1]} 
                    radius={10}
                    fill={"red"}
                />

                <Circle 
                    x={transformer.toScreen([1 , -1])[0]} 
                    y={transformer.toScreen([1 , -1])[1]} 
                    radius={10}
                    fill={"red"}
                />

                <Axis 
                    transformer={transformer} 
                    realSize={this.props.realSize}
                />

            </Layer>
        );
    }
}


export default Grid;