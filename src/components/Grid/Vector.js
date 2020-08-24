import React from 'react';
import { Arrow } from 'react-konva';


export default function Vector(props) {
    if(isNaN(props.vector[0]) || isNaN(props.vector[1])
        || props.vector[0] === '' || props.vector[1] === '') {
        return(
            <>
            </>
        );
    } else {
        let tr = props.transformer;
        let origin = tr.toScreen([0 , 0])
        let point = tr.toScreen(props.vector);

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
                    fill='blue'
                    stroke='blue'
                    strokeWidth={2}
                />
            </React.Fragment>
        );
    }
}