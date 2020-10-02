import React from "react";

import ExtendedLine from "./ExtendedLine.js";

import { multiplyVector } from './../../util/MatrixMult';


export default function Axis(props) {
    let tr = props.transformer;
    
    let xPoint = [1 , 0];
    let yPoint = [0 , 1];

    for(let i = 0; i < props.transformations.length; i ++) {
        xPoint = multiplyVector(props.transformations[i] , xPoint);
        yPoint = multiplyVector(props.transformations[i] , yPoint);
    }

    return(
        <>
            <ExtendedLine 
                point1={[0 , 0]}
                point2={yPoint}
                transformer={tr}
                realSize={props.realSize}
                stroke={(props.ghost) ? 'SteelBlue' : "black"}
                strokeWidth={2}
            />

            <ExtendedLine 
                point1={[0 , 0]}
                point2={xPoint}
                transformer={tr}
                realSize={props.realSize}
                stroke={(props.ghost) ? 'SteelBlue' : "black"}
                strokeWidth={2}
            />
        </>
    );
}