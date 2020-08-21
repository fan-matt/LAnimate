import React from "react";


export default function Button(props) {
    return(
        <span className={props.className} onClick={props.onClick}>
            {props.children}
        </span>
    );
}