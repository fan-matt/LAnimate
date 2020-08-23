import React from "react";
import styled from 'styled-components';

import { HEADER_HEIGHT } from './../../consts/layoutConsts.js';


const StyledHeader = styled.div`
    position: fixed;
    top: 0;

    width: 100vw;
    height: ${HEADER_HEIGHT};
    text-align: center;

    background-color: darkslategray;

    h1 {
        font-size: 27px;
        line-height: ${HEADER_HEIGHT};
        color: #f7f7f7;
    }
`;


export default function MainHeader(props) {
    return(
        <StyledHeader>
            <h1> LAnimate </h1>
        </StyledHeader>
    );
}