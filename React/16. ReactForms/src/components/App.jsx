import React from "react";

function App() {
  const [name,setName] = React.useState("");
  const [headingText,setHeading] = React.useState("");
  function handleChange(event){
    setName(event.target.value);
  }
  function handleClick(event){
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      <input value={name} onChange={handleChange} type="text" placeholder="What's your name?" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
