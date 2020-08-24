import React from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-konva";

import Grid from "./../Grid/Grid.js";

import CT from "./../../util/CoordinateTranslate.js";

import "./Space.scss";


class Space extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            width: 0,
            height: 0,
            transformer: new CT(),
            scrollCounter: 0,
            scrollScale: 2,
        }
    }


    setDimensions = () => {
        let spaceWidth = this.myRef.current.offsetWidth;
        let spaceHeight = this.myRef.current.offsetHeight;

        // We do this part since we don't want to pan- at least for now...
        let tempTransformer = new CT();
        tempTransformer.origin = [spaceWidth / 2 , spaceHeight / 2];
        tempTransformer.scale = spaceWidth / 20;
        //////////////////////////////////////////////////////////////////

        this.setState({
            width: spaceWidth,
            height: spaceHeight,
            transformer: tempTransformer,
        });
    }


    componentDidMount() {
        // let spaceWidth = this.myRef.current.offsetWidth;
        // let spaceHeight = this.myRef.current.offsetHeight;
        // let tempTransformer = new CT();
        // tempTransformer.origin = [spaceWidth / 2 , spaceHeight / 2];
        // tempTransformer.scale = 50;

        // this.setState({
        //     transformer: tempTransformer,
        // });

        this.setDimensions();
        window.addEventListener('resize' , this.setDimensions);

        let thisElement = ReactDOM.findDOMNode(this);
        thisElement.addEventListener("wheel" , this.handleScroll);
    }


    componentWillUnmount() {
        window.removeEventListener('resize' , this.setDimensions);

        let thisElement = ReactDOM.findDOMNode(this);
        thisElement.removeEventListener("wheel" , this.handleScroll);
    }


    handleScroll = (e) => {
        e.preventDefault();

        let multiplier;

        if(e.deltaY > 0) {
            multiplier = 1 / this.state.scrollScale;
            this.setState({
                scrollCounter: this.state.scrollCounter - 1,
            })
        } else {
            multiplier = this.state.scrollScale;
            this.setState({
                scrollCounter: this.state.scrollCounter + 1,
            })
        }

        let newScale = this.state.transformer.scale * multiplier;

        let tempTransformer = new CT();
        tempTransformer.origin = this.state.transformer.origin;
        tempTransformer.scale = newScale;


        this.setState({
            transformer: tempTransformer,
        });
    }
    

    render() {
        return(
            <div className="space-container" ref={this.myRef} onScroll={this.handleScroll}>
                <Stage width={this.state.width} height={this.state.height}>
                    <Grid
                        realSize={[this.state.width , this.state.height]}
                        transformer={this.state.transformer}
                        scrollCounter={this.state.scrollCounter}
                        scrollScale={this.state.scrollScale}
                        vectors={this.props.vectors}
                     />
                </Stage>
            </div>
        );
    }

}


export default Space;