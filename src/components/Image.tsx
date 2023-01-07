import React from "react";
import {SVGImg} from '../assets/PackageSVG';

const Image = ({url}: {url:string | undefined}) => {
    return(
        <>
            <h2>
                Provide a prompt and see your image below
            </h2>
            <div className="image">
                {url ? <img className="image" src={url} alt='ai generated'/> : <SVGImg/>}
            </div>
        </>
    )
}

export default Image;