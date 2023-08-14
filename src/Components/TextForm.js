import React, {useState} from "react";

export default function TextForm(props) {
const [text, setText] = useState("Enter text here");
const handleOnChange = (event) => {
    setText(event.target.value); // append typed character to text
}
const handleUpOnClick = () => {
    setText(text.toUpperCase()); // convert current text value to UPPERCASE
    props.showAlert('Text converted to UPPERCASE', 'Success');
}
const handleLwOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText); // convert current text value to lowercase
    props.showAlert('Text converted to lowercase', 'Success');
}
const handleClearOnClick = () => {
    let newText = '';
    setText(newText); // clear the text
    props.showAlert('Text has been cleared', 'Success');
}
const handleTcOnClick = () => {
    let sentence = text.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    setText(sentence.join(' '))
    props.showAlert('Text converted to TitleCase', 'Success');
}
const handleEsOnClick = () => {
    let sentence = text.replace(/ +/g,' '); //.split(" ");
    setText(sentence)
    props.showAlert('Extra space has been removed', 'Success');
}
const handleCtOnClick = () => {
    navigator.clipboard.writeText(text);
}
  return (
    <>
        <div className="container my-3">
            <div className="mb-3">
                <h3 htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'black':'white'}`}>
                    {props.heading}
                </h3>
                <textarea
                    className={`form-control text-${props.mode==='light'?'black':'black'} text-bg-${props.mode==='light'?'light':'light'}`}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                    ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpOnClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLwOnClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearOnClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleTcOnClick}>Convert to TitleCase</button>
            <button className="btn btn-primary mx-1" onClick={handleEsOnClick}>Remove extra space</button>
            <button className="btn btn-primary mx-1" onClick={handleCtOnClick}>Copy text</button>
        </div>
        <div className={`container mt-4 text-${props.mode==='light'?'black':'white'}`}>
            <h4>Your text summary</h4>
            <p>{text.length>0?text.split(' ').length:'0'} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minute(s) to read</p>

            <h4 className="mt-4">Preview</h4>
            <p>{text.length>0?text:'Please enter text above to see the preview'}</p>
        </div>   
    </>
  );
}
