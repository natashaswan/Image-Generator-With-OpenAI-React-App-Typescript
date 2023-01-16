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
    const textValueRef = useRef<HTMLTextAreaElement>(null);
    const numValueRef = useRef<HTMLSelectElement>(null);

    //
    //
    //

    const onClickHandler = () => {
        const enteredText: string | undefined = textValueRef?.current?.value;
        const enteredNum: string | undefined = numValueRef?.current?.value;
        //
        const generateImage = async () =>{
            if(enteredText){
                setFetching(true);
                const imageParameters: RequestParams = {
                    prompt: enteredText,
                    n: parseInt(enteredNum || '1'),
                    size: "512x512",
                }
                openai.createImage(imageParameters).then(
                    response=>{
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
                <label htmlFor="input-text">Image description, e.g. a close up, studio photographic portrait of a white siamese cat that looks curious</label>
                <textarea 
                    id='input-text' 
                    placeholder="image description" 
                    ref={textValueRef}  
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                        onClickHandler()
                        }
                    }}>
                </textarea>
                <label htmlFor="input-number">Number of images to generate:</label>
                <select id='input-number' ref={numValueRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <button className="button" onClick={onClickHandler}>
                        Generate image
                    </button>
                </div>
            </div> 
        )
}

export default Input;