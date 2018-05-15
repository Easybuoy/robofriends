import React from "react";


const Scroll = (props) => {
    return (
        <div style = {{ border: '5px solid black', overflow: 'scroll', height: '800px'}} >
            {props.children}
        </div>
    );
};

export default Scroll;