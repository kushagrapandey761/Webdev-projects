import React from "react";

function App() {
  setInterval(time2,1000);
  const now = new Date().toLocaleTimeString().replace("AM","").replace("PM","");
  console.log(now);
  var [time,setTime] = React.useState(now);
  function time2()
  {
    setTime(new Date().toLocaleTimeString().replace("AM","").replace("PM",""));
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={time2}>Get Time</button>
    </div>
  );
}

export default App;
