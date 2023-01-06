import React, { useState } from "react";

interface IMyProps {
    inputValue: {
        current: {
            value: string 
        }| null
      }
}

const Button:React.FC<IMyProps> = (props: IMyProps | null) => {
    const onClickHandler = (event: React.FormEvent) => {
        const enteredText = props?.inputValue.current?.value;
        console.log(enteredText);
    }
    return(
            <button onClick={onClickHandler}>
                Generate image
            </button>
        )
}

export default Button;