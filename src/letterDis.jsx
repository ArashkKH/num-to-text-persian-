import React from "react";
// import './Fonts/letterDis.css'

export default function letter(prop){


    return(
        <input type="text" name="" id="text" placeholder="حروف" autoComplete="off" value={prop.prop} />
    )
}