import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleResetState = (event) => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "" });
  };

  /* 
1- CREATE STATE 
2- Create a form that have the necssery textfilds and give name, value, onchange, for each textfild
   the form must have onSubmit function, and a button that must be type="submit"
3- give the values as well
4- If I do not give onChange after I give value .. THE STATE WILL NEVER CHANGE NEVER NEVER NEVER THAT IS WHY I HAVE TO ->
5- give onChange={} prop to be able to change the state 
7- in onChange I use the "setStateItem" to modify the value of the state then I get all elements in the obj by distracturing the object -> ...obj
8- get the properties I want from the object -> [event.targer.name] : event.target.value
9-
*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        maxWidth="500px"
        margin={"auto"}
        marginTop="10%"
        border='solid 0.5px'
        borderRadius={5}
        boxShadow={"5px 5px 7px  #ccc"}
        gap="4px"
        sx={{ ":hover": { boxShadow: "7px 7px 10px #ccc" } }}
      >
        <Typography textAlign="center" variant="h4" padding={3}>
          {isSignup ? "Signup" : "Login"}{" "}
        </Typography>
        {isSignup && (
          <TextField
            onChange={handleChangeState}
            name="name"
            type={"text"}
            value={input.name}
            variant="outlined"
            placeholder="Name :"
            
            margin="dense"
          />
        )}
        <TextField
          onChange={handleChangeState}
          name="email"
          type={"email"}
          value={input.email}
          variant="outlined"
          placeholder="Email :"
          margin="dense"
        />
        <TextField
          onChange={handleChangeState}
          name="password"
          type={"password"}
          value={input.password}
          variant="outlined"
          placeholder="Password :"
          margin="dense"
        />
        <Button endIcon={isSignup?<HowToRegSharpIcon/> : <LoginSharpIcon/>} type="submit" sx={{ margin: 2 }} variant="contained">
          {isSignup ? "Signup" : "Login"}
        </Button>
        
        <Button onClick={handleResetState} endIcon={isSignup? <LoginSharpIcon/> : <HowToRegSharpIcon/> } >
          {isSignup ? "Change to LOGIN" : "Don't have an account? signup"}
        </Button>
      </Box>
    </form>
  );
};

export default Auth;
