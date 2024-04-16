import React from 'react';

export function Project({props, title, description, image, link, linkslist, labelslist}) {
    return (
        <>
            <div className= "project flex-container full-padding" id="rcorners1" onClick={()=> window.open(link, "_blank", "noreferrer")}>
                <div className="verticalstack">
                    <h4 className="left-align header4">{title}</h4>
                    <div style={{"padding-bottom":"15px"}}>
                    {labelslist.map(label => <div> {label} </div> )}
                    </div>
                    <div className="flex-container">
                        <div className="Image one-container">
                            <img src={image} width="200"/>
                        </div>
                        <div className="three-container">
                            <p className="left-align"> {description}</p>
                        </div>
                        <div className="one-container">
                            {Object.keys(linkslist).map((key) => <div className="left-align"><a className="left-margin" href={linkslist[key]}>{key}</a><br /></div>)}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}