import React from 'react';
import styled from 'styled-components';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import NumberInput from './NumberInput.js';
import EditorIcon from './EditorIcon.js';

import XIcon from './../../img/icons/x.svg';


const Editor = styled.div`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    width: calc(100% - 20px);   /* subtract left+right padding */

    font-size: 20px;

    padding: 10px;
    border-bottom: solid;
    border-color: gray;
    border-width: 1px;
`;

const DeleteIcon = styled(EditorIcon)`
    margin-right: 20px;
`;

const ElementInput = styled(NumberInput)`
    margin: auto 10px;
`;


export default function VectorEditor(props) {
    function handleEnter(event) {
        if(event.key === 'Enter') {
            props.addVector();
        }
    }


    return (
        <Editor className={props.className} onKeyPress={handleEnter}>
            <div>
                <TeX math={'x_{' + String(props.index) + '}=('} />
                <ElementInput  autoFocus value={props.vector[0]} onChange={(e) => props.editVector(props.index , [e.target.value , props.vector[1]])} />
                <TeX math=',' />
                <ElementInput  value={props.vector[1]} onChange={(e) => props.editVector(props.index , [props.vector[0] , e.target.value])} />
                <TeX math=')' />
            </div>

            <DeleteIcon src={XIcon} alt='Delete Vector' size='30px' onClick={() => props.deleteVector(props.index)} />
        </Editor>
    );
}