import React, { useState, useRef } from "react";

import Button from './Button';

const Input: React.FC = () => {
    const inputValueRef = useRef<HTMLInputElement>(null);

    return(
            <div className="input">
                <label htmlFor="input-text">Image Description</label>
                <input type='text' id='input-text' placeholder="image description" ref={inputValueRef}></input>
                <Button inputValue={inputValueRef}/>
            </div> 
        )
}

export default Input;