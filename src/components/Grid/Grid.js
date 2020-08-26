import React from "react";
import { Layer, Text } from 'react-konva';

import Axis from "./Axis.js";

import ExtendedLine from "./ExtendedLine.js";
import Vector from './Vector.js';


export default function Grid(props) {
    let transformer = props.transformer;

    let xGridLines = [];
    let yGridLines = [];

    const SCALE_TEXT_OFFSET = 15;


    for(let i = -10; i <= 10; i += 1) {
        let currentX = i * Math.pow(2 , -1 * props.scrollCounter);
        let scaleTextCoordinates = props.transformer.toScreen([currentX , 0]);   

        xGridLines.push(
            <React.Fragment key={'x-gridline' + String(i)}>
                <ExtendedLine 
                    point1={[currentX , 0]}
                    point2={[currentX , 1]}
                    transformer={transformer}
                    realSize={props.realSize}
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
        let currentY = i * Math.pow(2 , -1 * props.scrollCounter);
        let scaleTextCoordinates = props.transformer.toScreen([0 , currentY]);

        xGridLines.push(
            <React.Fragment key={'y-gridline' + String(i)}>
                <ExtendedLine 
                    point1={[0 , currentY]}
                    point2={[1 , currentY]}
                    transformer={transformer}
                    realSize={props.realSize}
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
    

    let vectors = props.vectors.map( 
        (vector , index) =>  
            <Vector 
                key={'drawn-vector' + String(index)}
                transformer={transformer}
                vector={vector}
            />
    )


    return(
        <Layer className={props.className}>
            <Axis 
                transformer={transformer} 
                realSize={props.realSize}
            />

            {xGridLines}
            {yGridLines}
            {vectors}
        </Layer>
    );
}