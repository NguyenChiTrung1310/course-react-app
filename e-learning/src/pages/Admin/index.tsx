import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { adminAction } from '../../features/admin/adminAction';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

function createData1(
  account: string,
  name: string,
  typeUser: string,
  email: string
) {
  return { account, name, typeUser, email };
}

export default function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAction());
  }, []);

  const dataListUser = useSelector(
    (state: any) => state.admin.listUserResponse.response
  );
  console.log('DataListUser', dataListUser);
  const rowRender = dataListUser.map((item: any) => {
    const {
      taiKhoan = '',
      hoTen = '',
      maLoaiNguoiDung = '',
      email = '',
    } = item;
    return createData1(taiKhoan, hoTen, maLoaiNguoiDung, email);
  });

  return (
    <div style={{ width: '800px' }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Type User </TableCell>
              <TableCell align='right'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowRender.map((rowRender: any) => (
              <TableRow key={rowRender.account}>
                <TableCell component='th' scope='row'>
                  {rowRender.account}
                </TableCell>
                <TableCell align='right'>{rowRender.name}</TableCell>
                <TableCell align='right'>{rowRender.typeUser}</TableCell>
                <TableCell align='right'>{rowRender.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
