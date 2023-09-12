import React, { useState } from 'react';

export default function Textform(props){
    const [text,setText]=useState("");

    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let nextText=text.toUpperCase();
        setText(nextText);
        props.showAlert("Converted to Uppercase","success");

    }

    const handlelowClick=()=>{
        // console.log("Uppercase was clicked");
        let nextText=text.toLowerCase();
        setText(nextText);
        props.showAlert("Converted to Lowercase","success");

    }

    const handleOnChange=(event)=>{

        console.log(text.split(" ").length);
        setText(event.target.value)
    }

    const handleCopyClick=()=>{
        let nextText=text;
        navigator.clipboard.writeText(nextText);
        props.showAlert("Text copied to clipboard","success");

    }
    
    const handleExtraClick=()=>{
        let nextText=text.split(/[ ]+/);
        setText(nextText.join(" "));
        props.showAlert("Removed extra spaces","success");
        // console.log(nextText);
    }

    const handleClearClick=()=>{
        setText("");
        props.showAlert("Textarea cleared","success");
    }
    
    return(
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="light"?"white":"grey",
                 color:props.mode==="dark"?"white":"#042743"}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-4" onClick={handlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-4" onClick={handleExtraClick}>Remove Extra Space</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear textarea</button>
        </div>
        <div className="container my-3"  style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>Your text summmary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length } Minutes used to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here !"}</p>
        </div>
        </>
    )
}