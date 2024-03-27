import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  
  return <div>

  <h2>{props.name}</h2>
  <img
    src={props.img}
    alt="avatar_img"
    height="200px"
    width="200px"
  />
  <p>{props.tel}</p>
  <p>{props.email}</p></div>;
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>
    <Card name="James Bond" img="https://cdn.britannica.com/69/160969-050-F18C2AAC/Daniel-Craig-James-Bond-Casino-Royale.jpg" tel="+123 456 789" email="b@beyonce.com"/>
    <input/>
  </div>,
  document.getElementById("root")
);
