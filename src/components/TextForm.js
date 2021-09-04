import React, { useState } from "react";

export default function TextForm(props) {
  // const [text, setText] = useState("Enter your text here");
  const [text, setText] = useState("");
  function handleUpClick() {
    console.log("clicked" + text);
    // console.log( text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleLowClick() {
    //   console.log("clicked" + text)
    // console.log( text)
    let newText = text.toLowerCase();
    setText(newText);
  }
  function handleClearClick() {
    let newText = "";
    setText(newText);
  }
  function handleCopy(){
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  function handleExtraSpace (){
    let newText1 = text.split(/[ ] +/)
    setText(newText1.join(" "))
    // console.log('jii')
  }

  function handleOnChange(event) {
    // console.log("onChange")
    setText(event.target.value); // here default  value  of useState updateing
  }
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear all
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Minutes read {0.008 * text.split(" ").length} </p>
        <h2>preview </h2>
        <p> {text}</p>
      </div>
    </>
  );
}
