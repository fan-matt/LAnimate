import React , { useState , useEffect , useRef } from "react";
import styled from 'styled-components';
import { Stage } from "react-konva";

import Grid from "./../Grid/Grid.js";

import CT from "./../../util/CoordinateTranslate.js";


const SpaceContainer = styled.div`
    width: 100%;
    height: 100%;
`;


export default function Space(props) {
    const scrollScale = 2;

    const [width , setWidth] = useState(0);
    const [height , setHeight] = useState(0);
    const [tr , setTransformer] = useState(new CT());
    const [scrollCounter , setScrollCounter] = useState(0);

    const currentEl = useRef(null);
    
    // Runs only once
    // https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
    useEffect( () => {
        setDimensions();
    } , []);

    useEffect( () => {
        let currentElNode = currentEl.current;      // We make this copy for cleanup purposes- keep it here!

        window.addEventListener('resize' ,  setDimensions);
        currentEl.current.addEventListener('wheel' , handleScroll);

        return () => {
            window.removeEventListener('resize' , setDimensions);
            currentElNode.removeEventListener('wheel' , handleScroll);
        };
    });


    function setDimensions() {
        let spaceWidth = currentEl.current.offsetWidth;
        let spaceHeight = currentEl.current.offsetHeight;

        let tempTr = new CT();
        tempTr.origin = [spaceWidth / 2 , spaceHeight / 2];
        tempTr.scale = spaceWidth / 20;

        setWidth(spaceWidth);
        setHeight(spaceHeight);
        setTransformer(tempTr);
    }

    function handleScroll(e) {
        e.preventDefault();

        let multiplier;

        if(e.deltaY > 0) {
            multiplier = 1 / scrollScale;
            setScrollCounter(scrollCounter - 1)
        } else {
            multiplier = scrollScale;
            setScrollCounter(scrollCounter + 1)
        }

        let newScale = tr.scale * multiplier;

        let tempTr = new CT();
        tempTr.origin = tr.origin;
        tempTr.scale = newScale;

        setTransformer(tempTr);
    }


    return(
        <SpaceContainer className={props.className} ref={currentEl} onScroll={handleScroll}>
            <Stage width={width} height={height}>
                <Grid
                    realSize={[width , height]}
                    transformer={tr}
                    scrollCounter={scrollCounter}
                    scrollScale={scrollScale}
                    vectors={props.vectors}
                    />
            </Stage>
        </SpaceContainer>
    );
}