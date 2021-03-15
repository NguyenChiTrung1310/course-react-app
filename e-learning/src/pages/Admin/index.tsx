import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import TableListUser from './Components/TableListUser/TableListUser';
import ListPaginatedUser from './Components/ListPaginatedUser/ListPaginatedUser';
import Searchbar from './Components/Searchbar/Searchbar';
export default function Admin() {
  const dataListUser = useSelector(
    (state: any) => state.admin.listUserResponse.response
  );

  const dataPaginationListUser = useSelector(
    (state: any) => state.admin.listUserPaginatedResponse.response
  );
  // console.log(dataPaginationListUser);
  const dataPaginationListUserStatus = useSelector(
    (state: any) => state.admin.listUserPaginatedResponse.status
  );

  // const callBackFunction = (chillData: any) => {
  //   console.log(chillData);
  // };

  return (
    <div>
      <Grid container item xs={12}>
        <Typography color='secondary'>LIST USER</Typography>{' '}
      </Grid>
      <Searchbar />
      <TableListUser item={dataListUser} />
      <Grid container item xs={12}>
        <Typography color='secondary'>LIST USER PAGINATION</Typography>{' '}
      </Grid>
      <ListPaginatedUser
        dataPaginationListUser={dataPaginationListUser}
        dataPaginationListUserStatus={dataPaginationListUserStatus}
        // parentCallBack={callBackFunction}
      />
    </div>
  );
}
