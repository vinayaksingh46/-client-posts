import React, { useState } from "react";
import useStyles from "./styles";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {signIn,signUp} from '../../actions/auth'

const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const [formData, setFormData] = useState(initialFormState);
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const history=useHistory();
 const dispatch = useDispatch();
  function handleChange(e) {
      
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault();

    if(isSignUp){
      dispatch(signIn(formData,history))
    }else{
      dispatch(signUp(formData,history))
    }
    console.log(formData)
  }
  function handleShowPassword() {
    setShowPassword((preShowPassword) => !preShowPassword);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "SignUp" : "SignIn"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  half={true}
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  handleChange={handleChange}
                  half={true}
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Re Enter password"
                type="password"
                handleChange={handleChange}
              />
            )}
          </Grid>

          <Button
            type="submit"
            className={classes.submit}
            color="primary"
            variant="contained"
            fullWidth
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)}
              >
                {isSignUp
                  ? "Already member.Click here to Sign in"
                  : "Don't have a account.Click here to create one"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
