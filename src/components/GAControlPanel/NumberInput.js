import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
    display: inline-block;
    border: none;

    background-color: lightgray;

    width: 50px;
    margin: auto 10px;

    font-size: 20px;
    text-align: center;

    &:focus {
        outline: none;
    }
`;


export default function NumberInput(props) {

    return (
        <Input value={props.value} onChange={props.onChange} />
    );
}