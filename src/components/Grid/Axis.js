import React from "react";

import ExtendedLine from "./ExtendedLine.js";


export default function Axis(props) {
    let tr = props.transformer;
    
    return(
        <>
            <ExtendedLine 
                point1={[0 , 0]}
                point2={[0 , 1]}
                transformer={tr}
                realSize={props.realSize}
                stroke={"black"}
                strokeWidth={2}
            />

            <ExtendedLine 
                point1={[0 , 0]}
                point2={[1 , 0]}
                transformer={tr}
                realSize={props.realSize}
                stroke={"black"}
                strokeWidth={2}
            />
        </>
    );
}