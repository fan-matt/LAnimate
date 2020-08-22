import React, { useState } from "react";
import styled from 'styled-components';

import Button from './../Button/Button.js';
import FAButton from './../Button/FAButton.js';


// import "./GAControlPanel.scss";
const CPanel = styled.div`
    position: relative;
    width: 20vw;
    height: 100%;

    box-shadow: 3px 0px 8px black;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: horizontal;
    justify-content: space-evenly;

    ${'' /* padding-bottom: 10px; */}

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
        ${'' /* transform: scaleX(0); */}
    }

    &:hover::before {
        transform: scaleX(1);
    }
`;

const FAB = styled(FAButton)`
    bottom: 25px;
    right: 25px;
`;


export default function GAControlPanel(props) {
    const [bodyIndex , setBodyIndex] = useState(0);

    let panelBody;

    let vectorsBody = (
        <>
            <FAB radius="25px">
                +
            </FAB>
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
        <CPanel>
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


// class GAControlPanel extends React.Component {
//     render() {
//         return(
//             <div className="gacp">
//                 <div className="gacp-menu">
//                     <div className="gacp-menu-nav">
//                         <nav>
//                             <ul>
//                                 <li>
//                                     Vectors
//                                 </li>

//                                 <li>
//                                     Transformations
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


// export default GAControlPanel;