import React ,{useState} from "react";

export default function TextForm(props) {
    function handleUpClick(){
        console.log("clicked")
        setText("you have clicked on handleUpClick")
    }
     const [text, setText] = useState("Enter your text")
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value ={text} id="myBox" rows="9">
         
        </textarea>
      </div>
      <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UPPERCASE </button>
    </>
  );
}
