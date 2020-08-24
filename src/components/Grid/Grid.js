import React from "react";
import { Layer, Text } from 'react-konva';

import Axis from "./Axis.js";

import ExtendedLine from "./ExtendedLine.js";
import Vector from './Vector.js';


class Grid extends React.Component {
    render() {
        let transformer = this.props.transformer;

        let xGridLines = [];
        let yGridLines = [];

        const SCALE_TEXT_OFFSET = 15;


        for(let i = -10; i <= 10; i += 1) {
            let currentX = i * Math.pow(2 , -1 * this.props.scrollCounter);
            let scaleTextCoordinates = this.props.transformer.toScreen([currentX , 0]);   

            xGridLines.push(
                <React.Fragment key={'x-gridline' + String(i)}>
                    <ExtendedLine 
                        point1={[currentX , 0]}
                        point2={[currentX , 1]}
                        transformer={transformer}
                        realSize={this.props.realSize}
                        stroke={"grey"}
                        strokeWidth={1}
                    />

                    <Text 
                        x={scaleTextCoordinates[0] - 4}
                        y={scaleTextCoordinates[1] + SCALE_TEXT_OFFSET}
                        text={currentX}
                    />
                </React.Fragment>
            )
        }


        for(let i = -10; i <= 10; i += 1) {
            let currentY = i * Math.pow(2 , -1 * this.props.scrollCounter);
            let scaleTextCoordinates = this.props.transformer.toScreen([0 , currentY]);

            xGridLines.push(
                <React.Fragment key={'y-gridline' + String(i)}>
                    <ExtendedLine 
                        point1={[0 , currentY]}
                        point2={[1 , currentY]}
                        transformer={transformer}
                        realSize={this.props.realSize}
                        stroke={"grey"}
                        strokeWidth={1}
                    />

                    <Text 
                        x={scaleTextCoordinates[0] - SCALE_TEXT_OFFSET}
                        y={scaleTextCoordinates[1] - 5}
                        text={currentY}
                    />
                </React.Fragment>
            )
        }
        

        let vectors = this.props.vectors.map( 
            (vector , index) =>  
                <Vector 
                    key={'drawn-vector' + String(index)}
                    transformer={transformer}
                    vector={vector}
                />
        )


        return(
            <Layer className={this.props.className}>
                <Axis 
                    transformer={transformer} 
                    realSize={this.props.realSize}
                />

                {xGridLines}
                {yGridLines}
                {vectors}
            </Layer>
        );
    }
}


export default Grid;