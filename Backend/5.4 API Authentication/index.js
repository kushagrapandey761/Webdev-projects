import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Kushagra_101";
const yourPassword = "manu1234";
const yourAPIKey = "aef88cf2-91ea-40ff-9663-586c071c49f5";
const yourBearerToken = "b1c5d4e0-ea46-467c-9d09-0e53b6b8cc5d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/random`);
    res.render("index.ejs",{content : JSON.stringify(response.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
  //TODO 2: Use axios to hit up the /random endpoint
  

  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/all?page=2`, {
      auth: {
        username: "Kushagra_101",
        password: "manu1234",
      },
    });
    res.render("index.ejs",{content : JSON.stringify(response.data)});
  }catch(error){
    res.status(404).send(error.message);
  }

  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)
    res.render("index.ejs",{content : JSON.stringify(response.data)});
  }catch(error){
    res.status(404).send(error.message);
  }

  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/secrets/42`, {
    headers: { 
      Authorization: `Bearer b1c5d4e0-ea46-467c-9d09-0e53b6b8cc5d` 
    },
  });
  res.render("index.ejs",{content : JSON.stringify(response.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
  
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
