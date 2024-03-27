import React from "react";
import Input from "./Input";
function Login(){
    return <form className="form">
    <Input type="username" placeholder="Username"/>
    <Input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>;
};
export default Login;