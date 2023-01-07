import React from "react";
import { Rings } from 'react-loader-spinner';
import {SVGImg} from '../assets/PackageSVG';

const Image = ({url, fetching}: {url:string | undefined, fetching: boolean | undefined}) => {
    return(
        <>
            <h2>
                Provide a prompt and see your image below
            </h2>
            <div className="image">
                {fetching ? <Rings/> : url ? <img className="image" src={url} alt='ai generated'/> : <SVGImg/>}
            </div>
        </>
    )
}

export default Image;