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
`;

const MenuItem = styled(Button)`

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
                <MenuItem onClick={() => setBodyIndex(0)}>
                    Vectors
                </MenuItem>

                <MenuItem onClick={() => setBodyIndex(1)}>
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