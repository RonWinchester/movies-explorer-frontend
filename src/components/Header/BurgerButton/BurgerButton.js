import React from "react";

function BurgerButton ({onClick}) {
    return (
        <button className='button button__burger' onClick={onClick}></button>
    )
}
export default BurgerButton