import React from "react";
import { Rings } from 'react-loader-spinner';
import { SVGImg } from '../assets/PackageSVG';

const Image = ({url, fetching, error}: {url:string | undefined | (string | undefined)[], fetching: boolean | undefined, error: boolean | undefined}) => {
    return(
        <>
            <h2>
                Provide a prompt and see your image below!
            </h2>
            <div className="image">
                {fetching ? <Rings/> 
                : error ? <div>Error occured. Try again.</div> 
                : !url ? <SVGImg/> 
                : typeof url === 'string' ? <img className="image" src={url} alt='ai generated'/>
                : typeof url === 'object' && url.map((one)=>(<img key={one} className="image" src={one} alt='ai generated'/>))
            }
            </div>
        </>
    )
}

export default Image;