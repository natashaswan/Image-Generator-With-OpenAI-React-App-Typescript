import React, { useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
const openai = new OpenAIApi(configuration);

//
//
//

const Input = ({setImageURL, setFetching, setError} : {setImageURL: React.Dispatch<React.SetStateAction<string | undefined>>, setFetching: React.Dispatch<React.SetStateAction<undefined | boolean>>, setError: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const inputValueRef = useRef<HTMLTextAreaElement>(null);

    //
    //
    //

    const onClickHandler = () => {
        const enteredText: string | undefined = inputValueRef?.current?.value;
        //
        const generateImage = async () =>{
            if(enteredText){
                setFetching(true);
                const imageParameters: {prompt: string} = {
                    prompt: enteredText,
                }
                const response = await openai.createImage(imageParameters);
                if(response){
                    setFetching(false);
                    const urlData: string | undefined = response.data.data[0].url;
                    setImageURL(urlData);
                }
                else{
                    setError(true)
                }
            }

        }
        generateImage();
    }

    return(
            <div className="input">
                <label htmlFor="input-text"></label>
                <textarea id='input-text' placeholder="image description" ref={inputValueRef}></textarea>
                <div>
                    <button className="button" onClick={onClickHandler}>
                        Generate image
                    </button>
                </div>
            </div> 
        )
}

export default Input;