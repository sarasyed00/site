import React, { useState } from 'react';
import { Label } from "./Label";


export function LabelFilter(props) {

    const [set, setSet] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#A0A299');

    function filterList(){
        if(set){
            setSet(false)
            setBackgroundColor('#A0A299')
            props.removeFromFilteredLabels(props.title);
        }else{
            setSet(true)
            setBackgroundColor('#62635d')
            props.addToFilteredLabels(props.title)
        }
    };

    return (
        <>
            <div className="labelFilter" onClick={()=>filterList()}>
            <Label title={props.title} color={props.color} backgroundColor={backgroundColor} isFilter={true}/>
            </div>
        </>
    )
}