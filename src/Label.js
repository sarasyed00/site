import React from 'react';

export function Label(props) {
    return (
        <>
            <div style={props.backgroundColor ? {backgroundColor: props.backgroundColor} : {backgroundColor: '#A0A299'}} className="label" id="rcorners1">
                <div class="flex-container" style={{"align-items": "center"}}>
                    <div>
                        <div style={{backgroundColor: props.color}} className="circle"> </div>
                    </div>
                    <div style={{"padding-left":"5px"}}>
                        <p1>{props.title}</p1>
                    </div>
                </div>  
            </div>
        </>
    )
}