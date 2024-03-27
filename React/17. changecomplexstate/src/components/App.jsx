import React from "react";

function App() {
  const [fullName,setfullName] = React.useState({
    fname:"",
    lname:""
  });

  function handleChange(event){
    
    const {value,name} = event.target;
    
    setfullName((prevValue)=>{
      if(name === "fName"){
      return {
    fname:value,
    lname:prevValue.lname
      }}
      
      else if(name === "lName"){
      return {
    fname:prevValue.fname,
    lname:value
      }}
      
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fname} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
