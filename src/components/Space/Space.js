import React from "react";
import { Stage , Layer , Text } from "react-konva";

import Grid from "./../Grid/Grid.js";

import CT from "./../../util/CoordinateTranslate.js";

import "./Space.css";


class Space extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            width: 0,
            height: 0,
            transformer: new CT(),
        }
    }


    setDimensions = () => {
        let spaceWidth = this.myRef.current.offsetWidth;
        let spaceHeight = this.myRef.current.offsetHeight;

        this.setState({
            width: spaceWidth,
            height: spaceHeight,
        });
    }


    componentDidMount() {
        let spaceWidth = this.myRef.current.offsetWidth;
        let spaceHeight = this.myRef.current.offsetHeight;
        let tempTransformer = new CT();
        tempTransformer.origin = [spaceWidth / 2 , spaceHeight / 2];
        tempTransformer.scale = 50;

        this.setState({
            transformer: tempTransformer,
        });

        this.setDimensions();
        window.addEventListener('resize' , this.setDimensions);
    }


    componentWillUnmount() {
        window.removeEventListener('resize' , this.setDimensions);
    }


    render() {
        return(
            <div className="space-container" ref={this.myRef}>
                <Stage width={this.state.width} height={this.state.height}>
                    <Grid
                        realSize={[this.state.width , this.state.height]}
                        transformer={this.state.transformer}
                     />
                </Stage>
            </div>
        );
    }

}


export default Space;