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
        tempTr.scale = getNewScale(spaceWidth , spaceHeight , scrollCounter);

        setWidth(spaceWidth);
        setHeight(spaceHeight);
        setTransformer(tempTr);
    }

    // These parameters really are all necessary- don't remove!
    function getNewScale(width , height , scrollCounter) {
        let temp;

        if(width >= height) {
            temp = width / 20;
        } else {
            temp = height / 20;
        }

        temp *= Math.pow(scrollScale , scrollCounter);
        return temp;
    }

    function handleScroll(e) {
        e.preventDefault();

        let newScrollCounter = scrollCounter;

        if(e.deltaY > 0) {
            newScrollCounter -= 1;
        } else {
            newScrollCounter += 1;
        }

        // We calculate this absolutely every time instead of incrementally
        // since computers aren't 100% accurate and crazy scrolling using
        // the incrementing method can mess up the scaling.
        let newScale = getNewScale(width , height , newScrollCounter);
        let tempTr = new CT();

        tempTr.origin = tr.origin;
        tempTr.scale = newScale;

        setScrollCounter(newScrollCounter);
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