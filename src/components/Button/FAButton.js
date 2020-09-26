import React from 'react';
import styled from 'styled-components';

import Button from './Button.js';


const FAB = styled(Button)`
    position: absolute;
    display: inline-block;

    text-align: center;
    line-height: calc(${props => props.radius} * 2);

    height: calc(${props => props.radius} * 2);
    width: calc(${props => props.radius} * 2);

    background-color: darkslategray;

    border-radius: ${props => props.radius};
    /* border-width: 2px;
    border-color: darkslategray;
    border-style: solid; */

    font-size: calc(${props => props.radius} * 1.4);
    font-weight: bolder;
    color: #f7f7f7;

    box-shadow: -3px 0px 8px black;
`;


export default function FAButton(props) {

    return(
        <FAB radius={props.radius} className={props.className} onClick={props.onClick}>
            {props.children}
        </FAB>
    );
}