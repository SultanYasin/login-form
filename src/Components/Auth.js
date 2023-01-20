import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect, useRef, useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

import styles from "../Components/MuiComponents/MyStyle.module.css";
import { Link } from "react-router-dom";

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
    setInput({ name: "", email: "", password: "", confirmPassword: "" });
  };

  /* 
1- CREATE STATE 
2- Create a form that have the necssery textfilds and give name, value, onchange, for each textfild
   the form must have onSubmit function, and a button that must be type="submit"
3- give the values as well
4- If I do not give onChange after I give value .. THE STATE WILL NEVER CHANGE NEVER NEVER NEVER THAT IS WHY I HAVE TO ->
5- give onChange={} prop to be able to change the state 
7- in onChange I use the "setStateItem" to modify the value of the state then I get all elements in the obj by distracturing the object -> ...obj
8- get the properties I want from the object -> [event.target.name] : event.target.value
9-
*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={styles.BoxStyle} >

        <Typography textAlign="center" variant="h4" padding={3}>
          {isSignup ? "Signup" : "Login"}{" "}          
        </Typography>
        <Avatar sx={{ bgcolor: 'secondary.main', marginLeft: '46%'}}   >
            <LockOutlinedIcon />
        </Avatar>
        {isSignup && (
          <TextField
            onChange={handleChangeState}
            name="name"           
            type={"text"}
            value={input.name}
            variant="outlined"
            placeholder="Name :"
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          onChange={handleChangeState}
          name="email"
          type={"email"}
          value={input.email}
          variant="outlined"
          placeholder="Email :"
          margin="normal"
          fullWidth
        />
        <TextField
          onChange={handleChangeState}
          name="password"
          type={"password"}
          value={input.password}
          variant="outlined"
          placeholder="Password :"
          margin="normal"
          fullWidth
        />
        {isSignup && (
          <TextField
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="password"
            placeholder="ConfirmPassword"
          />
        )}
        <Button
          endIcon={isSignup ? <HowToRegSharpIcon /> : <LoginSharpIcon />}
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          variant="contained"
        >
          {isSignup ? "Signup" : "Login"}
        </Button>
        <br />
        <Button
          onClick={handleResetState}
          endIcon={isSignup ? <LoginSharpIcon /> : <HowToRegSharpIcon />}
        >
          {isSignup ? "Change to LOGIN" : "Don't have an account? signup"}
        </Button>

        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Grid item marginTop={2} marginBottom={3}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Box>
    </form>
  );
};

export default Auth;

/*    display :"flex";
   flex-direction : "column";
   align-items : "center";
   max-width: "600px";
   margin: "auto";
   margin-top: "10%";
   border: "solid 0.5px";
   border-radius: "5";
   box-shadow: "5px 5px 7px  #ccc";
   gap: "4px"; */
