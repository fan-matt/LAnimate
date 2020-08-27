import React from 'react';
import styled from 'styled-components';

import Button from './Button.js';


const StyledButton = styled(Button)`
    display: inline-block;

    padding: 5px;

    border-style: solid;
    border-color: black;
    border-width: 2px;
    border-radius: 4px;

    opacity: .5;
    transition: .3s;

    &:hover {
        opacity: 1;
    }
`;


export default function MainButton(props) {
    return(
        <StyledButton className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}