import React, { useState } from 'react';
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

type typeSearch = {
  keySearch: string;
};

const Searchbar = () => {
  const classes = useStyles();
  const [keySearch, setKeySearch] = useState<typeSearch>({
    keySearch: '',
  });

  // const handleChange = (e: any) => {
  //   setKeySearch({ keySearch: e.target.value });
  // };
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(keySearch);
  // };
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={(event) => {
          event.preventDefault();
          console.log(keySearch);
        }}>
        <TextField
          id='keySearch'
          name='keySearch'
          label='Search User'
          variant='outlined'
          autoComplete='taiKhoan'
          autoFocus
          onChange={(event) => setKeySearch({ keySearch: event.target.value })}
        />
      </form>
    </>
  );
};
export default Searchbar;
