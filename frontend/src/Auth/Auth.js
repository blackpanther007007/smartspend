import React, { useState } from 'react';
import { Avatar, Button, Box, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    


  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px'
      }} elevation={3}>
        <Avatar sx={{ marginTop: '8px', bgcolor: 'blue', }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form style={{ width: '100%', marginTop: '20px' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '24px 0px 8px' }}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Box sx={{ fontSize: '15px', display: 'flex', justifyContent: 'center', color: 'black', margin: '5px 0' }}>OR</Box>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin style={{ marginRight: '16px' }}
              onSuccess={googleSuccess}
              onError={googleError}
            /></Box> */}
          <Grid container sx={{ justifyContent: 'center', marginTop: '10px', marginBottom: '-15px' }}>
            <Grid item >
              <Button onClick={switchMode} sx={{ fontSize: '10px', color: '#409fe3' }}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;