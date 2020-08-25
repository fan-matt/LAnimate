import React, { useState } from "react";
import styled from 'styled-components';

import Button from './../Button/Button.js';
import VectorEditor from './VectorEditor.js';
import TransformationEditor from './TransformationEditor.js';
import EditorIcon from './EditorIcon.js';

import AddIcon from './../../img/icons/plus-square.svg';


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

const ObjectList = styled.ol`
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
            <ObjectList>
                {props.vectors.map( (i , index) => 
                    <VectorEditor 
                        key={'vector-editor' + String(index)} 
                        index={index} 
                        vector={i} 
                        editVector={props.editVector}
                        deleteVector={props.deleteVector}
                    /> 
                )}
            </ObjectList>

            <AddContainer>
                <EditorIcon src={AddIcon} alt='Add Vector' onClick={() => props.addVector()} />
            </AddContainer>
        </>
    );

    let transformationsBody = (
        <>
            <ObjectList>
                {props.transformations.map( (i , index) => 
                    <TransformationEditor 
                        key={'transformation-editor' + String(index)} 
                        index={index} 
                        transformation={i} 
                        editTransformation={props.editTransformation}
                        deleteTransformation={props.deleteTransformation}
                    /> 
                )}
            </ObjectList>

            <AddContainer>
                <EditorIcon src={AddIcon} alt='Add Transformation' onClick={() => props.addTransformation()} />
            </AddContainer>
        </>
    );


    switch(bodyIndex) {
        case 0:
            panelBody = vectorsBody;
            break;

        case 1:
            panelBody = transformationsBody;
            break;

        default:
            panelBody = vectorsBody;
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