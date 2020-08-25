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
    width: calc(100% - 20px);               ${'' /* subtract left+right padding */}
    height: 75px;                           ${'' /* Magic number */}

    font-size: 20px;

    padding: 10px;
    border-bottom: solid;
    border-color: gray;
    border-width: 1px;
`;

const DeleteIcon = styled(EditorIcon)`
    margin-right: 20px;
`;

const TransformationContainer = styled.div`
    width: calc(100% - 20px);
`;

const Matrix = styled.div`
    display: inline-flex;
    flex-direction: column;
    transform: translateY(-22%);            ${'' /* Another magic number */}
`;

const MatrixRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${ (props) => props.first ? 'auto' : '10px auto' }
`;

const ElementInput = styled(NumberInput)`
    margin: auto 5px;
`;


export default function TranformationEditor(props) {
    function handleChange(pos , value) {
        let newTransformation = props.transformation.slice();
        newTransformation[pos] = value;

        props.editTransformation(props.index , newTransformation);
    }


    return (
        <Editor className={props.className}>
            <TransformationContainer>
                <TeX math={'T_{' + String(props.index) + '}=\\Bigg('} />
                <Matrix>
                    <MatrixRow first>
                        <ElementInput value={props.transformation[0]} onChange={(e) => handleChange(0 , e.target.value)} />
                        <ElementInput value={props.transformation[1]} onChange={(e) => handleChange(1 , e.target.value)} />
                    </MatrixRow>
                    
                    <MatrixRow>
                        <ElementInput value={props.transformation[2]} onChange={(e) => handleChange(2 , e.target.value)} />
                        <ElementInput value={props.transformation[3]} onChange={(e) => handleChange(3 , e.target.value)} />
                    </MatrixRow>
                </Matrix>
                <TeX math={'\\Bigg)'} />
            </TransformationContainer>

            <DeleteIcon src={XIcon} alt='Delete Transformation' size='30px' onClick={() => props.deleteTransformation(props.index)} />
        </Editor>
    );
}