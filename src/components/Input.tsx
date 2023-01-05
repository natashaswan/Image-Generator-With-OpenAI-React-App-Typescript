import React, { useState } from "react";

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);

    return(
        <div>
            <input placeholder="image description" value={inputValue} onChange={({target})=>{setInputValue(target.value)}}></input>
        </div> 
        )
}

export default Input;