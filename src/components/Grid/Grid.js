import React from "react";
import { Layer, Text } from 'react-konva';

import Axis from "./Axis.js";

import ExtendedLine from "./ExtendedLine.js";
import Vector from './Vector.js';

import { multiplyVector } from './../../util/MatrixMult';


export default function Grid(props) {
    let transformer = props.transformer;

    let xGridLines = [];
    let yGridLines = [];

    const SCALE_TEXT_OFFSET = 15;


    for(let i = -10; i <= 10; i += 1) {
        // Skip axis
        if(i !== 0) {
            let currentX = i * Math.pow(2 , -1 * props.scrollCounter);

            let point1 = [currentX , 0];
            let point2 = [currentX , 1];
            let textPoint = [currentX , 0];

            for(let i = 0; i < props.transformations.length; i ++) {
                if(!props.ghost) {
                    point1 = multiplyVector(props.transformations[i] , point1);
                    point2 = multiplyVector(props.transformations[i] , point2);
                    textPoint = multiplyVector(props.transformations[i] , textPoint);
                }
            }

            let scaleTextCoordinates = props.transformer.toScreen(textPoint);   

            xGridLines.push(
                <React.Fragment key={'x-gridline' + String(i)}>
                    <ExtendedLine 
                        point1={point1}
                        point2={point2}
                        transformer={transformer}
                        realSize={props.realSize}
                        stroke={(props.ghost) ? 'lightblue' : "grey"}
                        strokeWidth={(props.ghost) ? 1 : 2}
                    />

                    <Text 
                        x={scaleTextCoordinates[0] - 4}
                        y={scaleTextCoordinates[1] + SCALE_TEXT_OFFSET}
                        text={currentX}
                        fill={(props.ghost) ? 'steelblue' : 'black'}
                    />
                </React.Fragment>
            )
        }
    }


    for(let i = -10; i <= 10; i += 1) {
        // Skip the axis
        if(i !== 0) {
            let currentY = i * Math.pow(2 , -1 * props.scrollCounter);

            let point1 = [0 , currentY]
            let point2 = [1 , currentY];
            let textPoint = [0 , currentY];

            for(let i = 0; i < props.transformations.length; i ++) {
                if(!props.ghost) {
                    point1 = multiplyVector(props.transformations[i] , point1);
                    point2 = multiplyVector(props.transformations[i] , point2);
                    textPoint = multiplyVector(props.transformations[i] , textPoint);
                }
            }

            let scaleTextCoordinates = props.transformer.toScreen(textPoint);

            yGridLines.push(
                <React.Fragment key={'y-gridline' + String(i)}>
                    <ExtendedLine 
                        point1={point1}
                        point2={point2}
                        transformer={transformer}
                        realSize={props.realSize}
                        stroke={(props.ghost) ? 'lightblue' : "grey"}
                        strokeWidth={(props.ghost) ? 1 : 2}
                    />

                    <Text 
                        x={scaleTextCoordinates[0] - SCALE_TEXT_OFFSET}
                        y={scaleTextCoordinates[1] - 5}
                        text={currentY}
                        fill={(props.ghost) ? 'steelblue' : 'black'}
                    />
                </React.Fragment>
            )
        }
    }
    
    let vectors = [];

    if(!props.ghost) {
        vectors = props.vectors.map( 
            (vector , index) =>  
                <Vector 
                    key={'drawn-vector' + String(index)}
                    transformer={transformer}
                    vector={vector}
                    transformations={props.transformations}
                />
        );
    }

    return(
        (!props.ghost || (props.ghost && props.transformations !== [])) ?
            <Layer className={props.className}>
                <Axis 
                    transformer={transformer} 
                    realSize={props.realSize}
                    transformations={(props.ghost) ? [] : props.transformations}
                    ghost={props.ghost}
                />

                {xGridLines}
                {yGridLines}
                {vectors}
            </Layer>
        :
            <>
            </>
    );
}