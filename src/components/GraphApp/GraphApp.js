import React , { useState } from "react";
import styled from 'styled-components';

import Space from "./../Space/Space.js";
import GAControlPanel from "./../GAControlPanel/GAControlPanel.js";


const GApp = styled.div`
    display: flex;
    flex-direction: horizontal;

    width: 100vw;
    height: calc(100vh - 50px);
`;

const ControlPanel = styled(GAControlPanel)`
    width: 25vw;
    height: 100%;

    box-shadow: 3px 0px 8px black;
`;


export default function GraphApp(props) {
    const [vectors , setVectors] = useState([]);

    function addVector() {
        let newVectorList = vectors.slice();
        newVectorList.push([undefined , undefined]);

        setVectors(newVectorList);
    }

    function deleteVector(index) {
        let newVectorList = vectors.slice();
        newVectorList.splice(index , 1);

        setVectors(newVectorList);
    }


    return(
        <GApp className={props.className} >
            <Space />
            <ControlPanel vectors={vectors} addVector={addVector} deleteVector={deleteVector} />
        </GApp>
    );
}