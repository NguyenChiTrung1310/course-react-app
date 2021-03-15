import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

const Searchbar = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id='outlined-basic' label='Search User' variant='outlined' />
      </form>
    </>
  );
};
export default Searchbar;
