import React from 'react';
import { Arrow } from 'react-konva';

import { multiplyVector } from './../../util/MatrixMult';


export default function Vector(props) {
    // I guess '' counts as a number??
    if(isNaN(props.vector[0]) || isNaN(props.vector[1])
        || props.vector[0] === '' || props.vector[1] === '') {
        return(
            <>
            </>
        );
    } else {
        let tr = props.transformer;
        let origin = tr.toScreen([0 , 0])
        let vectorCopy = [].concat(props.vector);   // Deep copy

        for(let i = 0; i < props.transformations.length; i ++) {
            vectorCopy = multiplyVector(props.transformations[i] , vectorCopy);
        }

        let point = tr.toScreen(vectorCopy);

        let points = [
            origin[0],
            origin[1],
            point[0],
            point[1],
        ];

        return(
            <React.Fragment>
                <Arrow 
                    points={points}
                    fill='red'
                    stroke='red'
                    strokeWidth={2}
                />
            </React.Fragment>
        );
    }
}