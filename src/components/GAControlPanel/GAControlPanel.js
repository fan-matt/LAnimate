import React, { useState } from "react";
import styled from 'styled-components';

import Button from './../Button/Button.js';
import VectorEditor from './VectorEditor.js';
import EditorIcon from './EditorIcon.js';

import AddIcon from './../../icons/plus-square.svg';


const CPanel = styled.div`
    position: relative;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-evenly;

    border-bottom: solid;
    border-width: 1px;
    border-color: gray;
`;

const MenuItem = styled(Button)`
    position: relative;
    display: inline-block;
    padding: 15px;
    cursor: pointer;

    &::before {
        position: absolute;
        display: inline-block;
        content: "";
        overflow: visible;
        bottom: 7px;
        width: calc(100% - 30px);   ${'' /* subtract double padding */}
        height: 3px;
        margin: 0;
        background-color: #B1E4E3;
        transition: .3s;
        transform: scaleX( ${props => props.selected ? 1 : 0} );
    }

    &:hover::before {
        transform: scaleX(1);
    }
`;

const VectorList = styled.ol`
    display: flex;
    flex-direction: column;
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 20px;
    height: 30px;
`;


export default function GAControlPanel(props) {
    const [bodyIndex , setBodyIndex] = useState(0);

    let panelBody;

    let vectorsBody = (
        <>
            <VectorList>
                {/* <VectorEditor vector={[1 , 1]} />
                <VectorEditor vector={[1 , 1]} /> */}
                {props.vectors.map( (i , index) => 
                    <VectorEditor 
                        key={'vector-editor' + String(index)} 
                        index={index} 
                        vector={i} 
                        deleteVector={props.deleteVector}
                    /> 
                )}
            </VectorList>

            <AddContainer>
                <EditorIcon src={AddIcon} alt='Add Vector' onClick={() => props.addVector()} />
            </AddContainer>
        </>
    );


    switch(bodyIndex) {
        case 0:
            panelBody = vectorsBody;
            break;

        case 1:
            break;

        default:
    }


    return(
        <CPanel className={props.className}>
            <Menu>
                <MenuItem onClick={() => setBodyIndex(0)} selected={bodyIndex === 0 ? true : false}>
                    Vectors
                </MenuItem>

                <MenuItem onClick={() => setBodyIndex(1)} selected={bodyIndex === 1 ? true : false}>
                    Transformations
                </MenuItem>
            </Menu>

            {panelBody}
        </CPanel>
    );
}