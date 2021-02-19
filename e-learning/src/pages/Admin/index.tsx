import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import TableListUser from './Components/TableListUser/TableListUser';
import ListPaginatedUser from './Components/ListPaginatedUser/ListPaginatedUser';
export default function Admin() {
  const dataListUser = useSelector(
    (state: any) => state.admin.listUserResponse.response
  );

  const dataPaginationListUser = useSelector(
    (state: any) => state.admin.listUserPaginatedResponse.response
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
      <ListPaginatedUser item={dataPaginationListUser} />
    </div>
  );
}
