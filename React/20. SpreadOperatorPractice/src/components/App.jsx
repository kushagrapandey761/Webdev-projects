import React from "react";

function App() {
  const [input,setIntput] = React.useState("");
  const [items,setItems] = React.useState([]);
  function handleChange(event){
    setIntput(event.target.value);
  }
  function addItem(){
    setItems((prevItems)=>{
      return [...prevItems,input];w
    })
    setIntput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem)=><li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
