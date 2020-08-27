import React, { useState , useEffect , useRef } from "react";
import styled from 'styled-components';

import Button from './../Button/Button.js';
import MainButton from './../Button/MainButton';
import VectorEditor from './VectorEditor.js';
import TransformationEditor from './TransformationEditor.js';

import PlusIcon from './../../img/icons/plus.svg';
import SettingsIcon from './../../img/icons/gear.svg';
import logo from './../../img/logo.png';


const CPanel = styled.div`
    position: relative;
    overflow: hidden;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-evenly;

    border-bottom: solid;
    border-width: 1px;
    border-color: gray;

    background-color: #2b2b2b;
    color: white;
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

const AddBlankSpace = styled.div`
    cursor: pointer;

    height: 100px;
    min-height: 100px;
    width: 100%;

    background-color: #f7f7f7;
    color: white;
    line-height: 100px;
    font-size: 75px;
    text-align: center;
`;

const ActionBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: calc(100% - 100px); ${`` /* Subtract double padding */}
    padding: 10px 50px;

    background-color: lightgray;

    border-bottom: solid;
    border-width: 1px;
    border-color: gray;
`;

const ActionBarIcon = styled.img`
    display: inline-block;
    height: 30px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: rotate(.25turn);
    }
`;

const TransformButton = styled(MainButton)`
    opacity: 1;
    background-color: white;
    
    &:hover {
        color: gray;
        opacity: 1;
    }
`;

const ObjectList = styled.div.attrs(
    props => ({
        maxHeight: props.maxHeight || '0px',
    })
)`
    display: flex;
    flex-direction: column;

    overflow: auto;

    max-height: ${ props => props.maxHeight };
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    border-top: solid;
    border-width: 1px;
    border-color: lightgray;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    padding-top: 10px;
    padding-bottom: 10px;

    line-height: 50px;

    z-index: 3;
    background-color: white;
`;


export default function GAControlPanel(props) {
    // DEBUGGING- CHANGE ME BACK TO useState(0) !!!!!!!!!!!!!!!!!!!!
    const [bodyIndex , setBodyIndex] = useState(1);
    const [objectListMaxHeight , setObjectListMaxHeight] = useState('0px');

    let panelBody;

    const objectListRef = useRef(null);
    const controlPanelRef = useRef(null);
    const footerRef = useRef(null);


    useEffect( () => {
        setListMaxHeight();
    } , [] );

    useEffect( () => {
        window.addEventListener('resize' , setListMaxHeight);

        return () => {
            window.removeEventListener('resize' , setListMaxHeight);
        };
    });


    function setListMaxHeight() {
        // This is terrible but I don't know what is better
        let maxHeight;
        let panelHeight = controlPanelRef.current.offsetHeight;
        let panelPos = controlPanelRef.current.offsetTop;
        let listPos = objectListRef.current.offsetTop;
        let footerHeight = footerRef.current.offsetHeight;

        maxHeight = panelHeight - panelPos - listPos - footerHeight;
        setObjectListMaxHeight(maxHeight);
    }


    let vectorsBody = (
        <>
            <ObjectList ref={objectListRef} maxHeight={String(objectListMaxHeight) + 'px'}>
                {props.vectors.map( (i , index) => 
                    <VectorEditor 
                        key={'vector-editor' + String(index)} 
                        index={index} 
                        vector={i} 
                        editVector={props.editVector}
                        deleteVector={props.deleteVector}
                    /> 
                )}

                <AddBlankSpace onClick={props.addVector}/>
            </ObjectList>

            {/* <AddContainer>
                <EditorIcon src={AddIcon} alt='Add Vector' onClick={() => props.addVector()} />
            </AddContainer> */}
        </>
    );

    let transformationsBody = (
        <>
            <ObjectList ref={objectListRef} maxHeight={String(objectListMaxHeight) + 'px'}>
                {props.transformations.map( (i , index) => 
                    <TransformationEditor 
                        key={'transformation-editor' + String(index)} 
                        index={index} 
                        transformation={i} 
                        editTransformation={props.editTransformation}
                        deleteTransformation={props.deleteTransformation}
                    /> 
                )}

                <AddBlankSpace onClick={props.addTransformation}/>
            </ObjectList>

            {/* <AddContainer>
                <EditorIcon src={AddIcon} alt='Add Transformation' onClick={() => props.addTransformation()} />
            </AddContainer> */}
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
        <CPanel className={props.className} ref={controlPanelRef}>
            <Menu>
                <MenuItem onClick={() => setBodyIndex(0)} selected={bodyIndex === 0 ? true : false}>
                    Vectors
                </MenuItem>

                <MenuItem onClick={() => setBodyIndex(1)} selected={bodyIndex === 1 ? true : false}>
                    Transformations
                </MenuItem>
            </Menu>

            <ActionBar>
                <ActionBarIcon src={PlusIcon} alt='Settings' onClick={ (bodyIndex === 0) ? props.addVector : props.addTransformation } />

                <TransformButton>
                    Transform
                </TransformButton>

                <ActionBarIcon src={SettingsIcon} alt='Settings' />
            </ActionBar>

            {panelBody}

            <Footer ref={footerRef}>
                {/* <span> Powered by </span> */}

                <div style={{display: 'flex'}}>
                    <img src={logo} alt={'LAnimate Logo'} height={'50px'} />
                    <span style={{fontSize: '25px' , }}> LAnimate </span>
                </div>
            </Footer>
        </CPanel>
    );
}