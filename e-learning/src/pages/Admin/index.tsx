import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import TableListUser from './Components/TableListUser/TableListUser';

export default function Admin() {
  const dataListUser = useSelector(
    (state: any) => state.admin.listUserResponse.response
  );

  return (
    <div>
      <Grid container item xs={12}>
        <Typography color='secondary'>LIST USER</Typography>{' '}
      </Grid>
      <TableListUser item={dataListUser} />
      <Grid container item xs={12}>
        <Typography color='secondary'>LIST USER PAGINATION</Typography>{' '}
      </Grid>
    </div>
  );
}
