import React, {useState, useEffect} from 'react'
import { Typography, 
    Box, 
    Grid, 
    Container,
    Avatar,
    Button, 
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    InputAdornment, 
 } from '@material-ui/core';
import clsx from 'clsx';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'; 
import useStyles from './useStyles';
import './_loginpage.scss'
 
 function LoginPage() {
    
  const classes = useStyles();
  const [field, setfield]= useState({
    taiKhoan: '',
    matKhau: '',
  })

  const handleChange= (e: any)=>{
    setfield({
      ...field,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit= (e: any)=>{
    e.preventDefault(); 
   console.log("taikhoan",field.taiKhoan)
   console.log("matKhau",field.matKhau)
  }

    return ( 
    <Grid 
    container
    component='main'
    className={clsx(classes.root && 'login-page')}
    > 
      <Grid item xs={12} sm={12} md={6} className='imageBanner' />
      <Grid item xs={12} sm={12} md={6}>
      <div className={classes.paper}> 
        <Typography component="h1" variant="h5">
         Log in your account!
        </Typography> 
        <form 
        className={classes.form} 
        noValidate 
        onSubmit={handleSubmit}
        >
          <TextField
           className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taiKhoan"
            placeholder="Your Account"
            name="taiKhoan"
            autoComplete="taiKhoan"
            autoFocus
            onChange={(event)=> handleChange(event)}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                      <Avatar className={classes.avatar}>
                    <AccountCircleOutlined />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
          />
          <TextField
           className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            placeholder="Password"
            type="password"
            id="matKhau"
            autoComplete="matKhau"
            onChange={(event)=> handleChange(event)}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                       <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
          /> 
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained" 
            color="secondary"
            className={classes.submit}
          >
            Log In
          </Button> 
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}> 
      </Box>
      </Grid>
    </Grid> 
    )
}
 
export default LoginPage;