import React from "react";

function App() {
  const [headingText,setHeadingText] = React.useState("Hello");
  const [style,setstyle] = React.useState("white");
  function handleClick(){
    setHeadingText("Submitted");
  }
  function handleMouseOver(){
    setstyle("black")
  }
  function handleMouseOut(){
    setstyle("white")
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : style}} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={handleClick}>Submit</button>
      {/* style={{backgroundColor : isMousedOver?"black":"white"}} */}
    </div>
  );
}

export default App;
