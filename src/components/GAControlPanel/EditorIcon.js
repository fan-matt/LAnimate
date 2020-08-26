import React from 'react';
import styled from 'styled-components';


const Icon = styled.img`
    display: block;
    height: ${ (props) => props.size ? props.size : '100%' };
    cursor: pointer;
    opacity: .5;
    transition: .3s;

    &:hover {
        opacity: 1;
    }
`;


export default function EditorIcon(props) {
    return (
        <Icon src={props.src} alt={props.alt} onClick={props.onClick} size={props.size} />
    );
}