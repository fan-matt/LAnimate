import React from 'react';
import styled from 'styled-components';

import "./reset.scss";

import MainHeader from "./components/MainHeader/MainHeader.js";
import GraphApp from "./components/GraphApp/GraphApp.js";

import { HEADER_HEIGHT } from './consts/layoutConsts.js';


const StyledApp = styled.div`
	position: relative;

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
`;

const GApp = styled(GraphApp)`
	margin-top: ${HEADER_HEIGHT};
  	width: 100vw;
  	height: calc(100vh - ${HEADER_HEIGHT});
`;


export default function App() {
  	return (
    	<StyledApp>
      		<MainHeader />
      		<GApp />
    	</StyledApp>
  	);
}