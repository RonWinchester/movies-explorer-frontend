import React from "react";

function BlockName (props) {
    return(
        <h2 className='BlockName' id={props.id}>{props.name}</h2>
    )
}

export default BlockName