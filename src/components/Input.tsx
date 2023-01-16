import React, { useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
const openai = new OpenAIApi(configuration);

interface RequestParams{
    prompt: string;
    n: number;
    size: "512x512";  
}

//
//
//

const Input = ({setImageURL, setFetching, setError} : {setImageURL: React.Dispatch<React.SetStateAction<string | (string | undefined)[] | undefined>>, setFetching: React.Dispatch<React.SetStateAction<undefined | boolean>>, setError: React.Dispatch<React.SetStateAction<boolean>>}) => {
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
                const imageParameters: RequestParams = {
                    prompt: enteredText,
                    n: 1,
                    size: "512x512",
                }
                openai.createImage(imageParameters).then(
                    response=>{
                        console.log(response);
                        if(response.data.data){
                            setFetching(false);
                            let urlData: string | (string | undefined)[] | undefined;
                            if(response.data.data.length > 1){
                                urlData =  response.data.data.map(({url})=>{return url});
                            }
                            else{
                                urlData =  response.data.data[0].url
                            
                            }
                            
                            setImageURL(urlData);
                        }        
                    }, 
                    error=>{
                        console.log(error);
                        setFetching(false);
                        setError(true)});
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