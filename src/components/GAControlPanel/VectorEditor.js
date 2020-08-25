import React from 'react';
import styled from 'styled-components';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import NumberInput from './NumberInput.js';
import EditorIcon from './EditorIcon.js';

import XIcon from './../../img/icons/x.svg';


const Editor = styled.li`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    width: calc(100% - 20px);   ${'' /* subtract left+right padding */}

    font-size: 20px;

    padding: 10px;
    border-bottom: solid;
    border-color: gray;
    border-width: 1px;
`;

const DeleteIcon = styled(EditorIcon)`
    margin-right: 20px;
`;


export default function VectorEditor(props) {

    return (
        <Editor className={props.className}>
            <div>
                <TeX math={'x_{' + String(props.index) + '}=('} />
                <NumberInput  value={props.vector[0]} onChange={(e) => props.editVector(props.index , [e.target.value , props.vector[1]])} />
                <TeX math=',' />
                <NumberInput  value={props.vector[1]} onChange={(e) => props.editVector(props.index , [props.vector[0] , e.target.value])} />
                <TeX math=')' />
            </div>

            <DeleteIcon src={XIcon} alt='Delete Vector' size='30px' onClick={() => props.deleteVector(props.index)} />
        </Editor>
    );
}