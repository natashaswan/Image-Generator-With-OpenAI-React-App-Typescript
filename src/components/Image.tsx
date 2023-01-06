import React from "react";

const Image = ({url}: {url:string | undefined}) => {
    return(
        <>
            <div>
                Your image:
            </div>
            {url ? <img src={url} alt='ai generated'/> : <p>will show up here.</p>}
        </>
    )
}

export default Image;