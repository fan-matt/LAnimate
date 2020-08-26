import React from "react";

import { Line } from "react-konva";


/**
 * Given two points, draws a line that extends beyond the two points, at
 * least beyond the viewport.
 * 
 * Provide the two points in terms of grid points, not actual screen coordinates.
 */
export default function ExtendedLine(props) {
     const VIEWPORT_BUFFER = 20;
     let renderedLine;
     let pointsArray = [];

     let topLeftGridCoordinates =  props.transformer.toGrid([0 - VIEWPORT_BUFFER , 0 - VIEWPORT_BUFFER]);
     let bottomRightGridCoordinates = props.transformer.toGrid([props.realSize[0] + VIEWPORT_BUFFER , props.realSize[1] + VIEWPORT_BUFFER]);

     let leftX = topLeftGridCoordinates[0];
     let topY = topLeftGridCoordinates[1];
     let rightX = bottomRightGridCoordinates[0];
     let bottomY = bottomRightGridCoordinates[1];



     // Check for vertical lines
     if(props.point1[0] === props.point2[0]) {
          if(props.point1[0] <= rightX && props.point1[0] >= leftX) {
               let point1 = props.transformer.toScreen([props.point1[0] , topY]);
               let point2 = props.transformer.toScreen([props.point1[0] , bottomY]);

               pointsArray.push(point1[0]);
               pointsArray.push(point1[1]);
               pointsArray.push(point2[0]);
               pointsArray.push(point2[1]);
          }
     } else {
          let slope = (props.point2[1] - props.point1[1]) / (props.point2[0] - props.point1[0]);
          let yInt = props.point1[1] - slope * props.point1[0];

          // We have y = slope * x + yInt
          // Check for intercepts on the viewport box
          let intercepts = [];
          let temp = 0;

          temp = slope * leftX + yInt;
          if(temp <= topY && temp >= bottomY) {
               intercepts.push([leftX , temp]);
          }

          temp = slope * rightX + yInt;
          if(temp <= topY && temp >= bottomY) {
               intercepts.push([rightX , temp]);
          }


          // For non-horizontal lines
          if(slope !== 0) {
               temp = (topY - yInt) / slope;
               if(temp <= rightX && temp >= leftX) {
                    intercepts.push([temp , topY]);
               }

               temp = (bottomY - yInt) / slope;
               if(temp <= rightX && temp >= leftX) {
                    intercepts.push([temp , bottomY]);
               }
          }
          

          if(intercepts.length >= 2) {
               let point1 = props.transformer.toScreen(intercepts[0]);
               let point2 = props.transformer.toScreen(intercepts[1]);

               pointsArray.push(point1[0]);
               pointsArray.push(point1[1]);
               pointsArray.push(point2[0]);
               pointsArray.push(point2[1]);
          }
     }

     if(pointsArray.length >= 2) {
          renderedLine = (
               <Line 
                    points={pointsArray}
                    stroke={props.stroke}
                    strokeWidth={props.strokeWidth}
               />
          );
     } else {
          renderedLine = (
               <>
               </>
          );
     }
     
     return renderedLine;
}