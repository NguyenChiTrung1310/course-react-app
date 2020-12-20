import React from 'react'
import { Typography, 
    Box, 
    Grid, 
    Container,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    InputAdornment, 
 } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'; 
import {useStyles} from './useStyles';
import './_loginpage.scss'
 
 function LoginPage() {
    const classes = useStyles();
    return ( 
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}> 
        <Typography component="h1" variant="h5">
         Log in your account!
        </Typography> 
        <form className={classes.form} noValidate>
          <TextField
           className={classes.field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Your Account"
            name="email"
            autoComplete="email"
            autoFocus
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
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
    </Container> 
    )
}
 
export default LoginPage;