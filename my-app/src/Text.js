import React, {useState} from "react";


export default function Text() {
    
const [text, setText] = useState("")
function inputHandler(event){
    setText(event.target.value)
}
function upper(){
        let newText = text.toUpperCase();
        setText(newText)
}
function lower(){
    let newText = text.toLowerCase();
    setText(newText)
}
function capital(){
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText)
}
function remove(){
    let newText = text.replace(/\s+/g, ' ')
    setText(newText)
}
function reset(){
    setText("")
}
function copy(){
    let copyTxt = document.querySelector("#inputBox")
    copyTxt.select();
  navigator.clipboard.writeText(copyTxt.value)
}

  return (
    <div>
      <div className="my-3">
        <h1>Welcome to MyTextUtilsApp</h1>
      </div>
      <div className="container my-5">
        <label htmlFor="inputBox">
        </label>
        <textarea className="form-control" value={text} onChange={inputHandler} id="inputBox" rows="8">
        
        </textarea>
        <button className="btn-primary mx-2 my-2" onClick={upper} id="upperBtn">
          to UPPERCASE
        </button>
        <button id="lowerBtn" className="btn-dark mx-2 my-2" onClick={lower}>
          to lowercase
        </button>
        <button className="btn-secondary mx-2 my-2" id="capitalBtn" onClick={capital}>
          to Capitalise
        </button>
        <button id="copyBtn" className="btn-danger mx-2 my-2" onClick={copy}>
          to Select/Copy
        </button>
        <button className="btn-primary my-2 mx-2" id="removeBtn" onClick={remove}>
          Remove extra spaces
        </button>
        <button id="resetBtn" className="btn-success mx-2 my-2" onClick={reset}>
          to Reset
        </button>
        <div>you have typed {text.split(" ").length-1} words and {text.length} characters</div>
      </div>
    </div>
  );
}
