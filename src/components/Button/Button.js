import React from "react";
import styled from 'styled-components';

const StyledButton = styled.div`
    cursor: pointer;
`;


export default function Button(props) {
    return(
        <StyledButton className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}